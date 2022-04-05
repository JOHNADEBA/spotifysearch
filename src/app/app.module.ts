import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAlbumsComponent } from './components/all-albums/all-albums.component';
import { AllArtistComponent } from './components/all-artist/all-artist.component';
import { OneAlbumComponent } from './components/one-album/one-album.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';

@NgModule({
  declarations: [AppComponent, AllAlbumsComponent, AllArtistComponent, OneAlbumComponent, HeaderComponent, FooterComponent, LoginComponent, WildCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
