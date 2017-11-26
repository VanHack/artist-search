import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
        private eventService: EventService,
        private titleService: Title
    ) { }

    @ViewChild('coverImage') coverImage: ElementRef;

    public artist: Artist;
    public loadingEvents: boolean = false;
    public loadingCover: boolean = true;

    ngOnInit() {
        this.route.data.subscribe((data: { user: Artist }) => {
            localStorage.setItem('lastArtist', JSON.stringify(data.user));

            this.artist = data.user;

            this.asyncLoadCover(data.user.thumb_url);

            this.titleService.setTitle(this.artist.name + ' | Home24 - Frontend Challenge');

            if (this.artist.upcoming_event_count > 0) {
                this.searchEvents();
            }
        });
    }

    private asyncLoadCover(path: string) {
        this.loadingCover = true;

        const asyncImage = new Image();

        asyncImage.onload = () => {
            this.loadingCover = false;
            this.coverImage.nativeElement.src = path;
        };

        asyncImage.src = path;
    }

    searchEvents() {
        this.loadingEvents = true;

        this.eventService.upcomingByArtist(this.artist)
            .subscribe(
                response => {
                    localStorage.setItem('lastArtistEvents', JSON.stringify(response));

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
