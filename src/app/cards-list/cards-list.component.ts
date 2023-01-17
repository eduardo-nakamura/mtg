import { Component, OnInit } from '@angular/core';
import { MtgService } from '../mtg.service';
import { Card, CardList } from '../card'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: any;
  selectedCard?: Card;
  constructor(private mtgService: MtgService) { }
  onSelect(card: Card): void {

    this.selectedCard = card;
  }
  ngOnInit(): void {
    this.getCards()
  }
  getCards(): void {
    // this.cards = this.mtgService.getCards();
    this.mtgService.getCards().subscribe(
      (data) => {
        
        for (let key in data) {
          console.log(data);
        }
        this.cards = data
      },          
      //this.utilsService.showAlertRequestError
      //
      err => {
        
      }
      //
    )
  }
}
