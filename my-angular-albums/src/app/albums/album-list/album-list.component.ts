import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];
    numbers: number[];
    titleCounter = 1;

    albumLabel: string;

    constructor() {}

    ngOnInit(): void {
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
}
