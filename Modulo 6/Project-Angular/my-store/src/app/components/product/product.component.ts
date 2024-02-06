import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ImgComponent } from '../img/img.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from "../../pipes/reverse.pipe";
import { TimeAgoPipe } from "../../pipes/time-ago.pipe";
import { HighlightDirective } from '../../directives/highlight.directive';
import { PercentPipe } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ImgComponent, CommonModule, ReversePipe, TimeAgoPipe, HighlightDirective, PercentPipe]
})
export class ProductComponent {
  date = new Date(/*'12-01-2023'*/)

  @Input() product:Product = {
    id: 0,
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  @Output() addedProduct = new EventEmitter<Product>()
  onAddToCart() {
    this.addedProduct.emit(this.product)
  }
}
