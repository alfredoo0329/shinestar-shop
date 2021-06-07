import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCartPlus, faMoneyBill, faStar, faTimes, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  faTimes = faTimes;
  faMoneyBill = faMoneyBill
  faCartPlus = faCartPlus;
  faStar = faStar;

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

  @Input('product') product: any;

  @Input('show') show: any;

  @Output() onHideDetails = new EventEmitter<any>();

  Arr = Array;
  Math = Math;
  colorSelect: number = 0;
  sizeSelect: number = 0;
  
  imagePos = 0;
  
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {}

  moveImagePos(steps: number) {
    this.imagePos += steps;
    if (this.imagePos >= this.product.images.length) {
      this.imagePos = 0;
      return;
    }
    if (this.imagePos < 0) 
      this.imagePos = this.product.images.length - 1;
  }

  hideDetails() {
    this.onHideDetails.emit(null);
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

}
