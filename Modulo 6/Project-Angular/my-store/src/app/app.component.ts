import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './components/services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet, ImgComponent, FormsModule, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsService]
})
export class AppComponent {
  togleImageState = true
  imgParent = 'https://http.cat/409'

  onLoaded(img:string) {
    console.log('Viene del padre ...')
  }

  togleImg() {
    this.togleImageState = !this.togleImageState
  }
}
