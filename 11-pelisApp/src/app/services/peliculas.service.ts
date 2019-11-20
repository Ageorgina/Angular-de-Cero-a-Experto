import { Injectable } from '@angular/core';

// tslint:disable-next-line: import-blacklist
import  { map } from 'rxjs/operators'; // Map
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeliculasService {

  private apikey = '649de5a52a2db3f498579b113e71c7d1';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  getPopulares() {

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.get( url ).pipe(map( res => res + '.json'));
  }

  buscarPelicula( texto: string ) {

    // tslint:disable-next-line: max-line-length
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.get( url ).pipe(map( res => res + '.json'));
  }

}
