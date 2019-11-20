import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDwxbn_Jb8sGx10APVoLZrZaEerFyTbvJc';
  private playlist = 'UUmsElbFaHyw8P_hKOMA-MJA';
  private nextPageToken = '';




  constructor(private http: HttpClient) { }

  getVideos() {

    const url = `${ this.youtubeUrl}/playlistItems`;
    const params = new HttpParams().set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playlist)
    .set('key', this.apiKey )
    .append('nextPageToken', this.nextPageToken );
    
    return this.http.get(url, {params}).pipe(map(resp => {
      console.log(resp);
      this.nextPageToken = resp.nextPageToken;
      const videos: any[] = [];
      // tslint:disable-next-line: one-line
      for (const video of resp.items){
        const videoSnippet = video.snippet;
        videos.push(videoSnippet);
      }
      return videos;
    }));

  }
}
