import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CARDS } from './mock-cards'
import { Card } from './card'
// import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MtgService {
  // https://api.magicthegathering.io/v1/cards/
  private cardUrl = 'https://api.magicthegathering.io/v1/cards/';  // URL to web api
  // private handleError: HandleError;

  constructor(
    private http: HttpClient
  ) { 
    // this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  // getCards(): Card[] {
  //   return CARDS;
  // }

  getCards(): Observable<any> {
    // const cards = of(CARDS);
    // return cards;
    let cards = this.http.get<Card[]>(this.cardUrl) 
    
    return cards
  }
}
