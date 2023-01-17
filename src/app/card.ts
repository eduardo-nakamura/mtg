export interface Card {
    multiverseid: number;
    name: string;
    manaCost: any;
    imageUrl: string;
    type: string;
    text: string;
    colors: string[];
    colorIdentity: string[];
}

export interface CardList {  
  cards: any[];
}