import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Base } from '../models/base';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
    private baseUrl = environment.apiBase;

    constructor(
        private http: HttpClient
    ) { }

    get<T extends Base>(path: string): Observable<T> {
        return this.http.get(this.baseUrl + path, { headers: this.headers() }).pipe(
            catchError(this.handleError)
        );
    }

    private headers(): HttpHeaders {
        var params = {
            'Content-Type': 'application/json'
        }

        return new HttpHeaders(params);
    }

    private handleError(error: HttpErrorResponse | any) {
        let errMsg: string;

        if (error instanceof HttpErrorResponse) {
            if (error.error !== undefined && error.error instanceof Array) {
                try {
                    const first_key = Object.keys(error.error)[0];
                    errMsg = error.error[first_key][0];
                } catch (err) {
                    errMsg = err.toString()
                }
            } else {
                errMsg = error.statusText;
            }
        }

        if (errMsg.length == 0) {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }
}
