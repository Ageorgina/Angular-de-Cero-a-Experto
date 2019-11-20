import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  tracks: any[] = [];

  constructor( private activated: ActivatedRoute,
               private spoty: SpotifyService ) {
                this.loading=true;
                this.activated.params.subscribe(params => {

      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTop(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading=true;
    this.spoty.getArtista(id).subscribe(
      data => {
        console.log(data);
        this.artista = data;
        this.loading = false;
      });
  }

  getTop(id: string) {
    this.loading = true;
    this.spoty.getTop(id).subscribe(
      data => {
        console.log(data);
        this.tracks = data;
        this.loading = false;
      });
  }

}
