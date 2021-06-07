import { Component, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as EventEmitter from 'events';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.css']
})
export class ProductListCardComponent implements OnInit {
  faTimes = faTimes;
  @Input('product') product: any;
  Arr = Array;
  Math = Math;
  colorSelect: number = 0;
  sizeSelect: number = 0;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  
    if (this.product == undefined)
      return;
    if (this.product.color == undefined)
      this.product.color = 0    
    this.colorSelect =  this.product.color;
    this.productService.changeColor(this.product);

    if (this.product.size == undefined)
      this.product.size = 0    
    this.sizeSelect =  this.product.size;
    this.productService.changeSize(this.product);
  }

  selectColor(color: number) {
    if (this.product == undefined)
      return;
    this.colorSelect = color;
    this.product.color = color;
    this.productService.changeColor(this.product);
  }

  selectSize(size: number) {
    if (this.product == undefined)
      return;
    this.sizeSelect = size;
    this.product.size = size;
    this.productService.changeSize(this.product);
  }

  getCartTotal() {
    return this.productService.getCartTotal();
  }

  getCartSubTotal() {
    return this.productService.getCartSubTotal();
  }  
}
