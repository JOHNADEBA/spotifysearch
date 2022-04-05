import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyendpointsService } from '../../services/spotifyendpoints.service';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css'],
})
export class AllAlbumsComponent implements OnInit {
  allAblumsArr: any = [];
  oneArtist: any = [];
  id: any = '';
  constructor(
    private route: ActivatedRoute,
    private albums: SpotifyendpointsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOneArtist(this.id);
    this.getAllAlbums(this.id);
  }
  getAllAlbums(id: string) {
    this.albums.getAlbums(id).subscribe((results: any) => {
      this.allAblumsArr = results.items;
    });
  }

  getOneArtist(id: string) {
    this.albums.getOneArtist(id).subscribe((results: any) => {
      this.oneArtist = results;
    });
  }

  goBack() {
    this.location.back();
  }
}
