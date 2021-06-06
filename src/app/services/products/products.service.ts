import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  readonly apiUrl = "http://localhost:3000/api/products"; 
  readonly apiPromotionsUrl = "http://localhost:3000/api/products/promotions"
  products: Product[] | undefined;
  promotions: Product[] | undefined;
  cart_products: Product[] = [];

  constructor(private http: HttpClient) { 
    this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
  }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getPromotions() {
    return this.http.get<Product[]>(this.apiPromotionsUrl);
  }

  getCartProducts() {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  }

  getCartSubTotal() {
    let subtotal = 0;
    this.cart_products.forEach((product) => {
      subtotal += product.cart_quantity * product.price;
    });
    return subtotal;
  }

  getCartIVA() {
    return this.getCartSubTotal() * 0.16;
  }

  getCartTotal() {
    return this.getCartSubTotal() + this.getCartIVA() + 20;
  }

  addToCart(product: Product) {
    product.cart_quantity = 1;

    if (localStorage.getItem('cart') == null) {
      this.cart_products?.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart_products));
      //console.log(this.cart_products);
      return;
    }

    const position = this.isDuplicated(product.id);

    if (position != -1) {
      this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cart_products[position].cart_quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cart_products));
      //console.log(this.cart_products);
      return;
    }

    this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
    this.cart_products?.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart_products));
    //console.log(this.cart_products);

  }

  isDuplicated(id: number): number {
    let position = -1;
    this.cart_products?.forEach((product, i) => {
      if (product.id == id) 
        position = i;
    });
    return position;
  }

  removeFromCart(product: Product, remove: boolean) {
    if (localStorage.getItem('cart') == null) 
      return;

    const position = this.isDuplicated(product.id);

    if (position == -1) 
      return;

    product.cart_quantity--;

    if (remove || product.cart_quantity <= 0) {
      this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cart_products.splice(position, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart_products));
      //console.log(this.cart_products);
      return;
    }

    this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
    this.cart_products[position].cart_quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cart_products));
    //console.log(this.cart_products);
  }

  changeColor(product: Product) {
    if (localStorage.getItem('cart') == null) 
      return;
    
    const position = this.isDuplicated(product.id);

    if (position == -1) 
      return;
    
    this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cart_products[position].color = product.color;
      localStorage.setItem('cart', JSON.stringify(this.cart_products));
      //console.log(this.cart_products);
  }

  changeSize(product: Product) {
    if (localStorage.getItem('cart') == null) 
      return;
    
    const position = this.isDuplicated(product.id);

    if (position == -1) 
      return;
    
    this.cart_products = JSON.parse(localStorage.getItem('cart') || '{}');
      this.cart_products[position].size = product.size;
      localStorage.setItem('cart', JSON.stringify(this.cart_products));
      //console.log(this.cart_products);
  }
}