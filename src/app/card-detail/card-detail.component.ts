import { Component, OnInit, Input  } from '@angular/core';
import { Card } from '../card'
import { CARDS } from '../mock-cards'


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() card?: Card;
  cards = CARDS;
  // card: Card = {
  //   multiverseid: 1,
  //   name: 'Counterspell',
  //   manaCost: '{U}{U}',
  //   imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=102&type=card',
  //   type: 'Instant',
  //   text: 'Counter target spell.',
  //   colors: ['U'],
  //   colorIdentity: ['U']
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
