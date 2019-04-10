import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];
    numbers: number[];
    titleCounter = 1;

    constructor() {}

    ngOnInit(): void {
        this.numbers = [1, 2, 3];

        const interval = setInterval(() => this.titleCounter++, 2000);

        setTimeout(() => clearInterval(interval), 6000);

        this.albumsArray = [
            {
                id: 1,
                artist: 'Tremonti',
                album_name: 'Dust',
                on_sale: true,
                price: 11.99,
                currency: 'USD',
                year: 2016,
                release_date: 'April 29, 2016',
                recording_location: 'Studio Barbarosa, Orlando, FL',
                genre: 'Pop/Rock',
                duration: '43:18:00',
                url: 'https://www.allmusic.com/album/dust-mw0002918360',
            },
            {
                id: 2,
                artist: 'Bon Jovi',
                album_name: '7800 Fahrerenheit',
                on_sale: false,
                price: 7,
                currency: 'USD',
                year: 1985,
                release_date: 'April 20, 1985',
                recording_location: 'Warehouse, Philadelphia, PA',
                genre: 'Pop/Rock',
                duration: '47:15:00',
                url:
                    'https://www.allmusic.com/album/7800%C2%B0-fahrenheit-mw0000189199',
            },
            {
                id: 3,
                artist: 'The Beatles',
                album_name: 'The White Album',
                on_sale: true,
                price: 24,
                currency: 'GBP',
                year: 1968,
                release_date: 'November 22, 1968',
                recording_location: '',
                genre: 'Pop/Rock',
                duration: '1:33:43',
                url:
                    'https://www.allmusic.com/album/the-beatles-white-album-mw0000418113',
            },
        ];

        const timerId = setInterval(() => {
            this.numbers = [...this.numbers, 4];
            this.albumsArray[0].price += 10;
            console.log(this.numbers);
        }, 1000);

        setTimeout(() => {
            clearInterval(timerId);
        }, 6000);

        console.log(this.albumsArray);
    }
}