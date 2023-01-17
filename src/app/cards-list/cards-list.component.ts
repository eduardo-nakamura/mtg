import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards'
import { Card } from '../card'

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards = CARDS;
  selectedCard?: Card;
  constructor() { }
  onSelect(card: Card): void {

    this.selectedCard = card;
  }
  ngOnInit(): void {
  }

}
