import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyendpointsService {
  private authorization =
    'Bearer BQAq7hcuaUj3vvUORA1RchiS9phk6h4px2VWWhb-uz43OfeDCNitbXf_HOIn3XePzM4oKreHDL4LQo67XCnJbVK5mak2WT3j2V8nFB9fz5JUEzrisgsqhubT_7YVXl4dGpgZP46Mj9NPIOL7QlRFWADP6JPcn78';

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    }),
  };

  constructor(private http: HttpClient) {}

  getLogin(): Observable<any> {
    const searchUrl = `http://localhost:3000/`;
    return this.http.get<any>(searchUrl);
  }

  getArtist(allArtist: string): Observable<any> {
    const searchUrl = `https://api.spotify.com/v1/search?q=${allArtist}&type=artist`;
    return this.http.get<any>(searchUrl, this.httpOptions);
  }

  getOneArtist(artistId: string): Observable<any> {
    const searchUrl = `https://api.spotify.com/v1/artists/${artistId}`;
    return this.http.get<any>(searchUrl, this.httpOptions);
  }

  getAlbums(artistId: string): Observable<any> {
    const searchUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get<any>(searchUrl, this.httpOptions);
  }
  getOneAlbum(albumId: string): Observable<any> {
    const searchUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    return this.http.get<any>(searchUrl, this.httpOptions);
  }
}
