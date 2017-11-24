import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/artist/artist';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) { }

    public artist: Artist;

    ngOnInit() {
        this.route.data.subscribe((data: { user: Artist }) => {
            this.artist = data.user;
        });
    }

}
