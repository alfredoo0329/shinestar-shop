import { Component, OnInit } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../../services/products/products.service';
import { NgForm } from '@angular/forms'
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})

export class CatalogPageComponent implements OnInit {
  category: String = 'General';
  search = '';

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.productService.products = response;
        console.log(this.productService.products);
      },
      error => {
        console.log(error);
      }
    );
  }

  showProduct(product: Product) : string {
    let show = false;
    show = (product.category == this.category || this.category == 'General');
    if (this.search != '')
      show = show && product.title.toLowerCase().includes(this.search.toLowerCase());
    return show ? 'inline-flex' : 'none';
  }

  //STYLE VARIABLES AND METHODS

  faFilter = faSlidersH;
  faSearch = faSearch;
  displayFilters = false;

  showFilters(): void {
    var search = document.getElementById('searchDiv'); 
    var filterBy = document.getElementById('filterBy'); 
    var orderBy = document.getElementById('orderBy'); 
    this.displayFilters = !this.displayFilters;
    if (this.displayFilters) {
      search?.classList.toggle('hide-mobile');
      filterBy?.classList.toggle('hide-mobile');
      orderBy?.classList.toggle('hide-mobile');
    } else {
      search?.classList.add('hide-mobile');
      filterBy?.classList.add('hide-mobile');
      orderBy?.classList.toggle('hide-mobile');
    }
  }

}
