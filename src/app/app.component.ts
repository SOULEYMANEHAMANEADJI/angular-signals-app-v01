import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {DashBoardComponent} from "./components/dash-board/dash-board.component";
import {AddProductComponent} from "./components/add-product/add-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, ProductsComponent, ProductsListComponent, DashBoardComponent, AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-app';
}
