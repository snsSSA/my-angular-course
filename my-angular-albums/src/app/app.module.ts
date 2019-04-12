import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddAlbumComponent } from './albums/add-album/add-album.component';

@NgModule({
    declarations: [
        AppComponent,
        AlbumListComponent,
        AlbumCardComponent,
        ReverseStrPipe,
        AlbumDetailsComponent,
        AboutComponent,
        NavbarComponent,
        NotfoundComponent,
        AddAlbumComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
