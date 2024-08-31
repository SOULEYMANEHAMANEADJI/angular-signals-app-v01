import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
productForm! : FormGroup;
constructor(private fb: FormBuilder, private  productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)]), // Validation pour le champ 'name'
      price: this.fb.control(0, [Validators.required, Validators.min(0)]),       // Validation pour le champ 'price'
      selected: this.fb.control(false)
    });
  }

  saveProduct() {
    if (this.productForm.valid) {  // Vérifier si le formulaire est valide avant de le soumettre
      const product: { id: number; name: string; price: number; selected: boolean } = {
        id: 0,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        selected: this.productForm.value.selected
      };
      this.productService.saveProduct(product);
      this.productForm.reset();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
