import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly apiUrl = "http://192.168.0.19:3000/api/products"; 
  products: Product[] | undefined;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
