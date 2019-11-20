import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service');
  }
  getQuery(query: any){
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCz4JmYvMVDByGhxlrkyTwagtEd7lqJj8Ohd3-yK_NrXuwllmVnOml8EAPnb4QdgC2sLLBfee-AEtipU2o'
  });
  return this.http.get(url, {headers});
  }

/* Previo a agregar getQuery
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUyBDfpN_YeT7MHj4xQhBSGK9IZxdrc8JvOMEkmrUZhdAE_ufYJ8SQRHXVdpc_4X9bB9Rlko3TQ2Gu5C0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe(map(data => data['albums'].items
    ));
}*/

getNewReleases() {
  return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items
  ));
}

/* Previo a agregar getQuery
getArtista(termino: string) {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBUyBDfpN_YeT7MHj4xQhBSGK9IZxdrc8JvOMEkmrUZhdAE_ufYJ8SQRHXVdpc_4X9bB9Rlko3TQ2Gu5C0'
  });
  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{ headers }).pipe(map(data => data['artists'].items
  ));
}*/

getArtistas(termino: string) {
  return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items
  ));
}

getArtista(id: string) {
  return this.getQuery(`artists/${id}`);
  // .pipe(map(data => data['artists'].items
  // ));
}
getTop(id: string) {
  return this.getQuery(`artists/${id}/top-tracks?country=us`)
   .pipe(map(data => data['tracks']
  ));
}

}
