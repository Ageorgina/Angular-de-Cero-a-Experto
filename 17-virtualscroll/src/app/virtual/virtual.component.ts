import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild( CdkVirtualScrollViewport, {static: true} ) viewport: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() {
    console.log(this.personas);
   }

  ngOnInit() {
  }

  irFinal() {
    console.log('entro');
    this.viewport.scrollToIndex(this.personas.length);
  }
  irInicio() {
    console.log('entro');
    this.viewport.scrollToIndex(this.personas[0]);
  }
  irMitad() {
    console.log('entro');
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

}
