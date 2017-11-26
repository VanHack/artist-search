import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/api.service';
import { Artist } from './artist';

@Injectable()
export class ArtistService {
    constructor(
        private api: ApiService
    ) { }

    /**
     * Get single artist information
     *
     * @param {string} name
     * @return {Observable<Artist>}
     */
    findByName(name: string): Observable<Artist> {
        const lastSearch: string = localStorage.getItem('lastSearch');

        if (lastSearch !== null && lastSearch === name.toLowerCase()) {
            const cachedArtist: Artist = JSON.parse(localStorage.getItem('lastArtist'));

            if (cachedArtist !== null) {
                return Observable.create(observer => {
                    observer.next(cachedArtist);
                    observer.complete();
                });
            }
        }

        localStorage.setItem('lastSearch', name.toLowerCase());
        localStorage.setItem('lastArtist', null);
        localStorage.setItem('lastArtistEvents', null);

        return this.api.get('artists/' + name);
    }
}
