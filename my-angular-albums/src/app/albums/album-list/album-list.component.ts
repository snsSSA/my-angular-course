import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';
import { AlbumService } from '../shared/album.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    // albums: Observable<Album[]>;
    albums: Album[];
    albumsArray: Album[];
    numbers: number[];
    titleCounter = 1;

    albumLabel: string;

    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        this.getAlbums();
        this.albumsArray = this.albumsArray = ALBUMS;
    }

    parentFunctionHandler(album) {
        alert(
            'Album ' +
                album.album_name +
                ' was sent from the album card component'
        );

        this.albumLabel = `${album.id} ${album.album_name}`;
    }

    // getAlbums() {
    //     this.albums = this.albumService.getAlbums();
    // }

    getAlbums() {
        this.albumService
            .getAlbums()
            .subscribe(
                albums => (this.albums = albums),
                error => console.log('Error: ', error)
            );
    }
}
