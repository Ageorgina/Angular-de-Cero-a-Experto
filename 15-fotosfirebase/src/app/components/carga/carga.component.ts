import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;

  archivos: FileItem[] = [];

  // tslint:disable-next-line: variable-name
  constructor(public _ci: CargaImagenesService) { }

  ngOnInit() {
  }
  cargarImagenes() {
    this._ci.cargarImagenesFirebase( this.archivos );
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }

  limpiar() {
    this.archivos = [];
  }

}
