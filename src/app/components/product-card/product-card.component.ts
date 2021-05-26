import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
  @Input('product') product: any;
  Arr = Array;
  Math = Math;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  //STYLE VARIABLES

  faMoneyBill = faMoneyBill
  faCartPlus = faCartPlus;
  faStar = faStar;
}
