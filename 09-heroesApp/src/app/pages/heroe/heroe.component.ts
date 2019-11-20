import { Component, OnInit } from '@angular/core';
import {HeroeModel} from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Entro a ngOninit');

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.heroesService.getHeroe( id ).subscribe((resp: HeroeModel) => {
        console.log(resp);
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  guardar(form: NgForm) {
    console.log('Entro a guardar');
    if (form.invalid) {
      return console.log('Formulario Invalido');
    }
    Swal.fire( 'Espere', 'Guardando Información', 'info');
    Swal.showLoading();
    let peticion: Observable<any>;
    if (this.heroe.id ) {
       peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
     peticion = this.heroesService.crearHeroe( this.heroe );
  }

    peticion.subscribe(resp => {
    Swal.fire(this.heroe.nombre, 'Se realizó correctamente', 'success');
  });
}
}
