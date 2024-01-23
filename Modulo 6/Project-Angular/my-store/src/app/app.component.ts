import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { Product } from './components/models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImgComponent, FormsModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  togLeImg: any;
  togleImageState = true

  imgParent = 'https://http.cat/409'
  products:Product[] = [{
    id: '1',
    name: "Cepillo",
    price: 1,
    img: 'https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/global/latam/products/cepillo-de-dientes-colgate-360-limpieza-completa-pdp.jpg'
  },
  {
    id: '2',
    name: "Carrito",
    price: 10,
    img: 'https://cdn5.dibujos.net/dibujos/pintados/201046/9ce08693f5e39c61eaef7d50d7779ad5.png'
  },
  {
    id: '3',
    name: "Mosquetero",
    price: 100,
    img: 'https://i.pinimg.com/736x/51/4b/af/514bafb21fc5fae0239d4ae132519822.jpg'
  }]

  onLoaded(img:string) {
    console.log('Viene del padre ...')
  }

  togleImg() {
    this.togleImageState = !this.togleImageState
  }
}
