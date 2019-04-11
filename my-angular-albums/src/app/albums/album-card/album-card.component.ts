import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Album } from '../album.model';
import { Output } from '@angular/core';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.css'],
})
export class AlbumCardComponent implements OnInit {
    @Input()
    album: Album;

    @Output()
    albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

    newPrice: number;

    constructor() {}

    ngOnInit() {
        if (this.album.on_sale) {
            // Apply 10% discount
            this.newPrice = this.album.price - this.album.price * 0.1;
        }
    }

    showAlbum() {
        this.albumClicked.emit(this.album);
    }

    showLogOnCardHover() {
        console.log('Album hover: ' + this.album.album_name);
    }
}
