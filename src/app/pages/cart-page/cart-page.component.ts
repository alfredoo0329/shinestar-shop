import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowDown = faArrowDown;
  show = false;
  Arr = Array;
  Math = Math;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  showDetails() {
    var sectionContent = document.getElementById('section-content-1'); 
    this.show = !this.show;
    if (this.show) {
      sectionContent?.classList.toggle('hide-mobile');
    } else {
      sectionContent?.classList.add('hide-mobile');
    }
  }

  
}
