import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowDown = faArrowDown;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.show = !this.show;
  }

  
}
