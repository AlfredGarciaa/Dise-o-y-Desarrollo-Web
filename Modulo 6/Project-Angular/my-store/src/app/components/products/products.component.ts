import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [{
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
  },
  {
    id: '4',
    name: "Soyas",
    price: 12,
    img: 'https://thefoodtech.com/wp-content/uploads/2020/05/beneficios-de-la-soya-1.jpg'
  },
  {
    id: '5',
    name: "Equipo inteligente",
    price: 142,
    img: 'https://blog.legis.com.co/hubfs/Blog-6-%E2%80%93-Edificios-Inteligentes.gif'
  },
  {
    id: '6',
    name: "ropa",
    price: 1200,
    img: 'https://static.eldiario.es/clip/a169422c-b292-4c46-9a1d-082f46b9220e_16-9-discover-aspect-ratio_default_0.jpg'
  }]
}
