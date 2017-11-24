import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

import { Base } from '../models/base';

import { environment } from '../../environments/environment';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ApiService {
    private endpoint = environment.apiBase;

    constructor(
        private http: HttpClient
    ) { }

    /**
     * GET method
     *
     * @param {string} path
     * @return {Observable<T>}
     */
    get<T extends Base>(path: string): Observable<T> {
        return this.http.get(this.endpoint + path + '?app_id=riabox', { headers: this.headers() }).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Setup request headers
     *
     * @return {HttpHeaders}
     */
    private headers(): HttpHeaders {
        var params = {
            'Content-Type': 'application/json'
        }

        return new HttpHeaders(params);
    }

    /**
     * Handle request errors
     *
     * @param {HttpErrorResponse | any} error
     * @return {ErrorObservable}
     */
    private handleError(error: HttpErrorResponse | any): ErrorObservable {
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
