import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit {
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Mujer",
    acepta: false
  };
  paises = [{
    codigo: 'MX',
    nombre: 'México'
  }, {
    codigo: 'USA',
    nombre: 'Estados Unidos'
  }
];
sexos = ["Hombre", "Mujer"];

  constructor() { }

  ngOnInit() {
  }
  guardar(form: NgForm) {
    console.log('guardar', form);
  }
}
