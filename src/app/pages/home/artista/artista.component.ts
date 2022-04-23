import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private _serviceSpotify: SpotifyService
  ) {
    this.router.params.subscribe(param => {
      this.getArtista(param['id']);
      this.getTopTracks(param['id']);
    })

  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this._serviceSpotify.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        console.log(this.artist)
      })
  }

  getTopTracks(id: string) {
    this._serviceSpotify.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks?.tracks;
        console.log(this.topTracks)
      })
  }
}
