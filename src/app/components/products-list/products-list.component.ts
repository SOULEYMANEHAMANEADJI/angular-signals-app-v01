import {Component, computed, OnInit, signal, TemplateRef} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product.models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";
import {UpperCasePipe} from "@angular/common";


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products = computed<Product[]>(() => this.productService.getAllProducts());
  productToBeDeleted: Product | null = null;  // Produit à supprimer
  modalReference: any;  // Référence pour le modal
 constructor(private productService: ProductService, private modalService: NgbModal) {}
  selected(product: Product) {
    this.productService.selectProduct(product);
  }
totalAmount = computed<number>(() => this.products()
  .reduce((sum, current) => sum + current.price, 0));
numberProducts = computed<number>(() => this.productService.getAllProducts().length);
  openDeleteModal(product: Product, modal: TemplateRef<any>){
    this.productToBeDeleted = product;
    this.modalReference = this.modalService.open(modal);  // Ouvrir le modal et stocker la référence
  }
  deleteProduct() {
    if (this.productToBeDeleted) {
      this.productService.deleteProduct(this.productToBeDeleted);  // Supprimer le produit
      this.productToBeDeleted = null;  // Réinitialiser le produit à supprimer
      this.modalReference.close();  // Fermer le modal
    }
  }

  ngOnInit(): void {
  }
}
