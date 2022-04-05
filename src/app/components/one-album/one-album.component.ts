import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyendpointsService } from '../../services/spotifyendpoints.service';

@Component({
  selector: 'app-one-album',
  templateUrl: './one-album.component.html',
  styleUrls: ['./one-album.component.css'],
})
export class OneAlbumComponent implements OnInit {
  album: any = [];
  id: any = '';
  constructor(
    private route: ActivatedRoute,
    private oneAlbum: SpotifyendpointsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSingleAlbum(this.id);
  }

  getSingleAlbum(id: string) {
    this.oneAlbum.getOneAlbum(id).subscribe((results: any) => {
      this.album = results;
    });
  }

  goBack() {
    this.location.back();
  }
}
