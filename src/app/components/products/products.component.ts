import {Component, computed, OnInit, signal} from '@angular/core';
interface Product {
  id : number,
  name: string,
  price: number,
  selected : boolean
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  // Méthode classique
  /*products: Product[] = [
    {id: 1, name: 'Computer', price: 6500, selected : true},
    {id: 2, name: 'Printer', price: 1200, selected : false},
    {id: 3, name: 'Smart Phone', price: 3200, selected : true}
  ]*/
  // Utilisation de Signals
  products = signal<Product[]>([]);
constructor() {}
ngOnInit(): void {
  this.products.set(
    [
      {id: 1, name: 'Computer', price: 6500, selected : true},
      {id: 2, name: 'Printer', price: 1200, selected : false},
      {id: 3, name: 'Smart Phone', price: 3200, selected : true}
    ]
  );
  // this.computeSelectedProducts();
}
// selectedProducts: number = 0;
// totalProducts: number = 0;
// Calcul avec Signals
selectedProducts = computed<number>(() => this.products().filter(p => p.selected).length);
totalProducts = computed<number>(() => this.products()
  .filter(p => p.selected)
  .reduce((sum, current) => sum + current.price, 0));

selected(product: Product) {
      // product.selected = !product.selected;
      // this.computeSelectedProducts();
      this.products.update(p => {
        return p.map(p => p.id === product.id ? {...product, selected : !product.selected} : p);
      });
}
/*computeSelectedProducts(){
  this.selectedProducts = this.products.filter(p => p.selected).length;
  this.totalProducts = this.products
    .filter(p => p.selected)
    .reduce((sum, current) => sum + current.price, 0);
}*/
}
