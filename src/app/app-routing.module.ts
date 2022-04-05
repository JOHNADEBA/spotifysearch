import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { AllArtistComponent } from './components/all-artist/all-artist.component';
import { LoginComponent } from './components/login/login.component';
import { OneAlbumComponent } from './components/one-album/one-album.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'album/:id',
    component: OneAlbumComponent,
  },
  {
    path: 'artist/:id',
    component: AllAlbumsComponent,
  },

  { path: '', component: AllArtistComponent },
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
