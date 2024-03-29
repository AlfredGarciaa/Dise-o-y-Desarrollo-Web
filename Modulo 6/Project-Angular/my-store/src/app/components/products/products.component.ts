import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductComponent } from '../product/product.component';
import { StoreService } from '../services/store.service';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  [x: string]: any;
  myShoppingCart: Product[] = []
  total: number = 0
  products: Product[] = []

  constructor (
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe (data => {
      this.products = data
    })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }
}
