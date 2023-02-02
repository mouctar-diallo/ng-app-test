import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  cards: any[] = [
    {name: "Macca",numb: "180",percent: 18,sentence: "в резервуаре",color: "#EB5757"},
    {name: "Macca",numb: "750",percent: 75,sentence: "в резервуаре",color: "#00A99D"},
    {name: "Macca",numb: "680",percent: 68,sentence: "в резервуаре",color: "#00A99D"},
    {name: "Macca",numb: "980",percent: 98,sentence: "в резервуаре",color: "#EB5757"},
    {name: "Macca",numb: "680",percent: 68,sentence: "в резервуаре",color: "#00A99D"},
    {name: "Macca",numb: "180",percent: 18,sentence: "в резервуаре",color: "#EB5757"},
    {name: "Macca",numb: "750",percent: 75,sentence: "в резервуаре",color: "#00A99D"},
    {name: "Macca",numb: "750",percent: 75,sentence: "в резервуаре",color: "#00A99D"},
    {name: "Macca",numb: "980",percent: 98,sentence: "в резервуаре",color: "#EB5757"},
    {name: "Macca",numb: "180",percent: 18,sentence: "в резервуаре",color: "#EB5757"},
    {name: "Macca",numb: "180",percent: 10,sentence: "в резервуаре",color: "#EB5757"},
  ];
  

  getCards() {
    return this.cards;
  }
}
