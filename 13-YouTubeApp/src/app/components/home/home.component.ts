import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  seleccionado: any ;
  constructor(private youtube: YoutubeService) {
    this.youtube.getVideos().subscribe(videos => {
      console.log(videos);
      this.videos = videos;
    });
   }

  ngOnInit() {
  }
  verVideo(video: any) {
    console.log(video);
    this.seleccionado = video;
    $('#myModal').modal();
  }
  cerrarModal() {
    this.seleccionado = null;
    $('#myModal').modal('hide');
    console.log('cerrado');
  }
  cargarMas() {
    this.youtube.getVideos().subscribe(videos => this.videos.push.apply(this.videos, videos));
  }

}
