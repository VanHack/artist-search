import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArtistComponent } from './artist.component';
import { EventsComponent } from '../events/events.component';

@NgModule({
    declarations: [
        ArtistComponent,
        EventsComponent
    ],
    exports: [
        ArtistComponent,
        EventsComponent
    ]
})
export class ArtistModule { }
