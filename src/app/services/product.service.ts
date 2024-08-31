import {effect, Injectable, signal} from '@angular/core';
import {Product} from "../models/product.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsState= signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.productsState.set(
      [
          {id: 1, name: 'Computer', price: 6500, selected : true},
          {id: 2, name: 'Printer', price: 1200, selected : false},
          {id: 3, name: 'Smart Phone', price: 3200, selected : true}
      ]);
    }, {allowSignalWrites: true});
  }
  public getAllProducts() {
    return this.productsState();
  }
  public selectProduct(product: Product) {
    this.productsState.update(
      products => products.map(
        p => (p.id === product.id) ? {...product, selected : !product.selected} : p
      )
    )
  }

  deleteProduct(product: Product) {
    // Backend job
    this.productsState.update(states => states.filter(p => p.id !== product.id));
  }

  saveProduct(product: Product) {
    product.id = this.getAllProducts().length + 1;
    console.log(product);
    this.productsState.update(state => [...state, product]);
  }
}
