import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Event } from '../../models/event/event';
import { Venue } from '../../models/event/venue';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    constructor(
        private modalService: BsModalService,
        private googleMapsWrapper: GoogleMapsAPIWrapper
    ) { }

    @Input() events: Event[];
    @ViewChild('mapView') mapView: AgmMap;
    @ViewChild('mapModal') mapModal: ModalDirective;

    public subscriptions: Subscription[] = [];

    public eventInfo = {
        name: '',
        lat: 0.0,
        lng: 0.0
    };

    ngOnInit() {
        this.mapView.zoom = 18;

        this.mapModal.onShown.subscribe((reason: string) => {
            this.mapView.triggerResize();
        });
    }

    openMapLocation(venue: Venue) {
        this.eventInfo = {
            name: venue.name,
            lat: parseFloat(venue.latitude),
            lng: parseFloat(venue.longitude)
        };

        this.mapModal.show();
    }

    openWindow(url: string) {
        window.open(url);
    }

}
