import { Component, OnInit } from '@angular/core';
import { SpotifyendpointsService } from '../../services/spotifyendpoints.service';

@Component({
  selector: 'app-all-artist',
  templateUrl: './all-artist.component.html',
  styleUrls: ['./all-artist.component.css'],
})
export class AllArtistComponent implements OnInit {
  name = '';
  allArtistArr: any = [];
  constructor(private artist: SpotifyendpointsService) {}

  ngOnInit(): void {
    this.searchArtist();
  }
  searchArtist() {
    if (this.name == '') {
     this.allArtistArr = []
     return
    }
    this.artist.getArtist(this.name).subscribe((results: any) => {
      this.allArtistArr = results.artists.items;
    });
  }
}
