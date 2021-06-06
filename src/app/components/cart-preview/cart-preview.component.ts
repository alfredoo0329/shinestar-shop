import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css']
})
export class CartPreviewComponent implements OnInit {

  @Input('show') show: boolean = false; 
  Arr = Array;
  Math = Math;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {}

  showCart(): void {
    this.show = !this.show;
  }
}