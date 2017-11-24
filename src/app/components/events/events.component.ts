import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../../models/event/event';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    constructor() { }

    @Input() events: Event[];

    ngOnInit() {
    }

}
