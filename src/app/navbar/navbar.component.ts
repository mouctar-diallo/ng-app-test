import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  startBtn() {
    console.log("start btn clicked")
  }

  endBtn() {
    console.log("end btn clicked")
  }
}
