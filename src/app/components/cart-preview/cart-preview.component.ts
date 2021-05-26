import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css']
})
export class CartPreviewComponent implements OnInit {

  @Input('show') show: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }
  
  showCart(): void {
    this.show = !this.show;
  }

}
