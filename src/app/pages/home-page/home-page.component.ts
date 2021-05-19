import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faArrowDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

  scrollDown() {
    window.scroll(0, window.screen.height - 270);
  }
}
