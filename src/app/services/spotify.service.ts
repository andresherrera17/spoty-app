import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlSpotify: string = environment.spotify.url;

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get<any[]>(`${this.urlSpotify}browse/new-releases?limit=20`)
      .pipe(map((data: any) => data['albums'].item));
  }

}
