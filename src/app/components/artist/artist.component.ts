import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../models/artist/artist';
import { Event } from '../../models/event/event';
import { EventService } from '../../models/event/event.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private eventService: EventService
    ) { }

    public artist: Artist;

    ngOnInit() {
        this.route.data.subscribe((data: { user: Artist }) => {
            this.artist = data.user;
            this.searchEvents();
        });
    }

    searchEvents() {
        this.eventService.upcomingByArtist(this.artist)
            .subscribe(
                response => {
                    this.artist.events = response;
                },
                error => {
                    console.error(error);
                }
            );
    }

}
