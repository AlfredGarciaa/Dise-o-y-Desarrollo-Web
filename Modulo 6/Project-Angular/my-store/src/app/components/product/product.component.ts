import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product:Product = {
    id: 0,
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>()
  onAddToCart() {
    this.addedProduct.emit(this.product)
  }
}
