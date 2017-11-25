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
    public loadingEvents: boolean;

    ngOnInit() {
        this.route.data.subscribe((data: { user: Artist }) => {
            this.artist = data.user;

            if (this.artist.upcoming_event_count > 0) {
                this.searchEvents();
            }
        });
    }

    searchEvents() {
        this.loadingEvents = true;

        this.eventService.upcomingByArtist(this.artist)
            .subscribe(
                response => {
                    this.loadingEvents = false;
                    this.artist.events = response;
                },
                error => {
                    this.loadingEvents = false;
                    console.error(error);
                }
            );
    }

}
