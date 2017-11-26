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
        const cachedArtist: Artist = JSON.parse(localStorage.getItem('lastArtist'));

        if (cachedArtist !== null && cachedArtist.id == artist.id) {
            const cachedArtistEvents: Event[] = JSON.parse(localStorage.getItem('lastArtistEvents'));

            if (cachedArtistEvents !== null && cachedArtistEvents.length > 0) {
                return Observable.create(observer => {
                    observer.next(cachedArtistEvents);
                    observer.complete();
                });
            }
        }

        return this.api.get('artists/' + artist.name + '/events');
    }
}
