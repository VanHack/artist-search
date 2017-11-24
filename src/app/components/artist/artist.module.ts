import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistComponent } from './artist.component';
import { EventsComponent } from '../events/events.component';
import { ArtistService } from '../../models/artist/artist.service';
import { EventService } from '../../models/event/event.service';

@NgModule({
    declarations: [
        ArtistComponent,
        EventsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ArtistComponent,
        EventsComponent
    ],
    providers: [ArtistService, EventService]
})
export class ArtistModule { }
