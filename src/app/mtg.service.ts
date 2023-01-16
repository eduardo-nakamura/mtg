import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MtgService {
  private cardUrl = 'api/card';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }
}
