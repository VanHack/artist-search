import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Artist } from '../../models/artist/artist';
import { ArtistService } from '../../models/artist/artist.service';

@Injectable()
export class ArtistResolver implements Resolve<Artist> {

    constructor(
        private artistService: ArtistService,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artist> {
        return this.artistService.findByName(route.params.name).pipe(
            catchError((error: HttpErrorResponse | any) => {
                this.router.navigate(['/404']);
                return Observable.throw(error);
            })
        );
    }

}
