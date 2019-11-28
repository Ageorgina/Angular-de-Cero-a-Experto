import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: any;

  constructor(private activated: ActivatedRoute,
              private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activated.params.subscribe ( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    console.log( this._heroesService.buscarHeroes(params['termino']));
    console.log( this.heroes);
    });
  }
}
