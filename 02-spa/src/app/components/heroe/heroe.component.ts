import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
 // styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any ={};
  marvel: string;
  dc: string;


  constructor( private activated: ActivatedRoute,
               private _heroesService: HeroesService ) {
    this.activated.params.subscribe( params => {
      console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe(params['id']);
      //  if(this.heroe.casa==="DC"){
      //     this.dc = this.heroe.casa;
      //   }
      //   else {
      //     this.marvel = this.heroe.casa;
      // }
      // console.log('dc->',this.dc,'marvel->', this.marvel);
    });
  }


}
