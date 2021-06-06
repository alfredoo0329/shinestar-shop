import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'product-sm-list-card',
  templateUrl: './product-sm-list-card.component.html',
  styleUrls: ['./product-sm-list-card.component.css']
})
export class ProductSmListCardComponent implements OnInit {
  @Input('product') product: any;
  colorSelect: number = 0;
  sizeSelect: number = 0;
  Arr = Array;
  Math = Math;

  faTimes = faTimes;

  constructor(public productService: ProductsService) { 
  }

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
}
