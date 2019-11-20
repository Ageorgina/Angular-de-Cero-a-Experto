import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  message: string;

  constructor(private http: HttpClient,
              private spoty: SpotifyService) {
                this.loading = true;

                this.spoty.getNewReleases().subscribe((data: any) => {
        
                  console.log(data);
                  this.nuevasCanciones = data;
                  this.loading = false;
                },

                (errorServicio) => {
                  this.loading = false;
                  this.error = true;
                  console.log(errorServicio.error.error.message);
                  this.message = errorServicio.error.error.message;
                });
              }
  }

