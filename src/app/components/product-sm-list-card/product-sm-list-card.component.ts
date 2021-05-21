import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'product-sm-list-card',
  templateUrl: './product-sm-list-card.component.html',
  styleUrls: ['./product-sm-list-card.component.css']
})
export class ProductSmListCardComponent implements OnInit {

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
