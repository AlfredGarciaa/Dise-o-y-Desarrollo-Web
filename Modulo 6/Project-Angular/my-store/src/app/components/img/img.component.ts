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
  //counter: number = 0
  //counterFn: number = 0
  imgNull = '../../../assets/images/null.jpg'
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
    /*
    if(typeof window != 'undefined') {
      this.counterFn = window.setInterval(() => {
        this.counter +=1
        console.log('Run Counter')
      }, 1000)
    }
    */
   console.log('ngOnInit', 'imgValue=>', this.img)
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit', 'imgValue=>', this.img)
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy')
    /*
    if(typeof window != 'undefined') {
      console.log('ngOnDestroy', 'imgValue=>', this.img)
      window.clearInterval(this.counterFn)
    }
    */
  }

  imgError() {
    this.img = this.imgNull
  }

  imgLoaded() {
    console.log('Viene el hijo ...')
    this.loaded.emit(this.img)
  }
}
