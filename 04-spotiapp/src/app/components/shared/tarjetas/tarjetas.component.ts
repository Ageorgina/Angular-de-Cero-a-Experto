import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})

export class TarjetasComponent {
  @Input() items: any = [];

  artistaId: any;
  constructor(private router: Router) { }

  verArtista(item: any) {
    console.log(item);
    if(item.type === 'artist') {
      this.artistaId = item.id;
      console.log(this.artistaId );
    } else {
      this.artistaId = item.artists[0].id;

      console.log(this.artistaId );
    }
    this.router.navigate(['/artist',this.artistaId]);
  }
}
