import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-add-album',
    templateUrl: './add-album.component.html',
    styleUrls: ['./add-album.component.css'],
})
export class AddAlbumComponent implements OnInit {
    album: Album;

    constructor(private albumService: AlbumService) {}

    addAlbum(value: any) {
        value.year = value.release_date.substr(value.release_date.length - 4);
        this.albumService
            .addAlbum(value)
            .subscribe(data => console.log(data), error => console.log(error));
    }

    ngOnInit() {
        this.album = {
            id: null,
            artist: '',
            album_name: '',
            genre: '',
            price: 0,
            currency: '',
            on_sale: false,
            year: 1900,
            release_date: '',
            recording_location: '',
            duration: '',
            url: '',
            tracks: [
                {
                    id: 1,
                    track_number: 1,
                    title: 'Sample Track',
                    length: '4:06',
                },
            ],
        };
    }
}
