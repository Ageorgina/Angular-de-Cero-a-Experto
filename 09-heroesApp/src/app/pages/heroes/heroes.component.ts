import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }
  heroes: HeroeModel[] = [];
  cargando = false; 

  
  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(resp => {
      console.log(resp);
      this.cargando = false;
      this.heroes = resp;
      console.log('Array ->', this.heroes);
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number){
    Swal.fire({
      text: `Estas seguro que deseas borrar a ${heroe.nombre}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          '',
          'success'
        )
        this.heroes.splice(i,1);
        this.heroesService.borrarHeroe( heroe.id ).subscribe();
      }
    })

}



}
