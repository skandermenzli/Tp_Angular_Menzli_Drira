import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors = [
    'blue',
    'purple',
    'green',
    'yellow',
    'red',
    'orange'

  ]

  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color: any;
  

  constructor() { }

  @HostListener('keypress') changeColor(){
    const i = Math.floor (Math.random()*(this.colors.length -1))
    this.bc = this.colors[i]
    this.color = this.colors[i+1]
  }

}
