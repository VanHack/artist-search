import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Artist } from '../../models/artist/artist';
import { ArtistService } from '../../models/artist/artist.service';

@Injectable()
export class ArtistResolver implements Resolve<Artist> {
    constructor(
        private artistService: ArtistService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artist> {
        return this.artistService.findByName(route.params.name);
    }
}
