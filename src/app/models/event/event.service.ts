import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Artist } from '../artist/artist';
import { Event } from './event';

@Injectable()
export class EventService {
    constructor(
        private api: ApiService
    ) { }

    /**
     * Get upcoming artist events
     *
     * @param {Artist} artist
     * @return {Observable<Event[]>}
     */
    upcomingByArtist(artist: Artist): Observable<Event[]> {
        return this.api.get('artists/' + artist.name + '/events');
    }
}
