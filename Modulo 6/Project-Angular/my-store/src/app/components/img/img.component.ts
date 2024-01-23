import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() img: string = 'valor init'
  @Output() loaded = new EventEmitter<string>
  contador: number = 0
  contadorFn: number | undefined
  imgDefault = '../../../assets/images/default.jpg'

  constructor() {
    // before render
    // No async
    // Once time
    console.log('constructor', 'imgValue=>', this.img)
  }

  ngOnChanges() {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue=>', this.img)
  }

  ngOnInit(): void {
    // before render
    // async fetch -- once time
    this.contadorFn = window.setInterval(() => {
      this.contador +=1
      console.log('Run Contador')
    }, 1000)
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit', 'imgValue=>', this.img)
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy', 'imgValue=>', this.img)
    window.clearInterval(this.contadorFn)
  }

  imgError() {
    this.img = this.imgDefault
  }

  imgLoaded() {
    console.log('Viene el hijo ...')
    this.loaded.emit(this.img)
  }
}
