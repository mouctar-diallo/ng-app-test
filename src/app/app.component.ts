import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startGradient ="#0089FF"
  endGradient ="#232532"

  cards = [
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
  ];

  applyColorByPercent(startColor: string, endColor: string, startPercent: number, endPercent: number) {
    return `linear-gradient(to top, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`;
  }
}
