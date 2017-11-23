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
        return this.api.get('artists/' + name);
    }
}
