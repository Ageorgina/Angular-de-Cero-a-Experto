import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    console.log('Esta directiva fue llamada!!!');
  }

  @Input('appResaltado') nuevoColor: string;
  @HostListener('mouseenter') mouseentro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'pink');
    // this.el.nativeElement.style.backgroundColor = 'pink';
  }
  @HostListener('mouseleave') mousesalio() {
    this.resaltar(null);
    // this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
