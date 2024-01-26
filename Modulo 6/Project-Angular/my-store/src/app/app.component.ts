import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImgComponent, FormsModule, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  togLeImg: any;
  togleImageState = true

  imgParent = 'https://http.cat/409'

  onLoaded(img:string) {
    console.log('Viene del padre ...')
  }

  togleImg() {
    this.togleImageState = !this.togleImageState
  }
}
