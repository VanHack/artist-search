import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistModule } from './components/artist/artist.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ArtistModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
