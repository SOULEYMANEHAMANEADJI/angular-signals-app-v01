import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  /*Méthode classique*/
  /*
  price : number = 8000;
  quantity : number = 3;
  total : number = this.price * this.quantity;

  decrement() {
    --this.quantity;
    if (this.quantity < 0) {}
    this.quantity = 1;
    this.total = this.price * this.quantity;
  }

  increment() {
    ++this.quantity;
    this.total = this.price * this.quantity;
  }
  */
  constructor() {
    effect(() => {
      // console.table("Quantity loaded => " + this.quantity);
      // this.count.set(21);
      // console.table("Count loaded => " + this.count);
    }, {allowSignalWrites : true});
  }
  // Utilisation de signals
  price : number = 8000;
  quantity = signal<number>(1);
  total = computed(() => this.price * this.quantity());
  count = signal<number>(2);
  increment(){
    // this.quantity.set(this.quantity()+1);
    this.quantity.update(value => value + 1);
  }
  decrement(){
    // this.quantity.set(this.quantity()-1);
    this.quantity.update(value => value - 1);
    if(this.quantity() === 0){
      this.quantity.set(1);
    }
  }
}
