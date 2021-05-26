import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.getPromotions();
  }

  getPromotions() {
    this.productService.getPromotions().subscribe(
      response => {
        this.productService.promotions = response;
        console.log(this.productService.promotions);
      },
      error => {
        console.log(error);
      }
    );
  }

  //STYLE VARIABLES AND METHODS

  faArrowDown = faAngleDown;

  scrollDown() {
    window.scroll(0, window.screen.height - 270);
  }
}
