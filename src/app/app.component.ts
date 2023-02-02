import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  startGradient ="#0089FF";
  endGradient ="#232532";
  cards: any[] = [];

  constructor(public cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
    console.log(this.cards);
    
  }

  applyColorByPercent(startColor: string, endColor: string, startPercent: number, endPercent: number) {
    return `linear-gradient(to top, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`;
  }
}
