// tslint:disable-next-line: max-line-length
import { Component, OnInit,
  OnChanges, OnDestroy, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck  } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
  <br>
     <p>ngStyle </p>
    <app-ng-style></app-ng-style>
<br><br>
    <p> CSS </p>
    <p>
        Ejemplo con CSS
    </p>
     <app-css></app-css>
     <br><br>
     <p> ngClass </p>
  <app-clases></app-clases>
  <br><br>
  <p>  Directivas </p>
    <p [appResaltado]="'gray'">
        Directivas
    </p>
    <br><br>
    <p> ngSwitch </p>
   <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy,
AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {

  constructor() {
    console.log('constructor');
   }


  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
