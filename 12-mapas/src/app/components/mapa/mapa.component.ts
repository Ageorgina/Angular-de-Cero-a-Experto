import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  lat = 19.2917;
  lng = -98.9389;


  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {
    if ( localStorage.getItem('marcadores')) {
    this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    }

  ngOnInit() {
  }
  agregarMarcador(evento){
    console.log(evento);
    const coords = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.snackBar.open('Marcador Agregado!', 'Cerrar', { duration: 1500 });
    this.guardarStorage();

  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.snackBar.open('Marcador Borrado!', 'Cerrar', { duration: 1500 });
    this.guardarStorage();
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (!result) {
        return ;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;
      this.guardarStorage();
      this.snackBar.open('Cambios Guardados!', 'Cerrar', { duration: 1500 });
    });
  }

}
