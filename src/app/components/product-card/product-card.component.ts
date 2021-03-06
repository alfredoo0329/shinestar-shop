import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../services/products/products.service"

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
  
  @Output() onShowDetails = new EventEmitter<any>();

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {}

  showDetails() {
    this.onShowDetails.emit(this.product);
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

  //STYLE VARIABLES

  faMoneyBill = faMoneyBill
  faCartPlus = faCartPlus;
  faStar = faStar;
}
