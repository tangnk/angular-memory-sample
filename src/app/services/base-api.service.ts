import { AppRoutingModule } from './../app-routing.module';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError, tap } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root',
})
export class BaseApiService {
    contentType = 'application/json';
    authorization = 'bearer 00000000-0000-0000-0000-000000000001_6a9894d92f0b4d46822a2024b423b71b';
    ver = '01.09.20.003';
    constructor(private readonly http: HttpClient, private readonly storageService: LocalStorageService) {
    }

    get<T = any>(url: string): Observable<T> {
        return this.http.get<T>(url).pipe(catchError(e => this.handleError(e)));
    }

    post<T = any>(url: string, body: object): Observable<T> {
        let hd: HttpHeaders = new HttpHeaders({
            'Content-Type': this.contentType,
            'Authorization': this.authorization,
            'ver': this.ver
        });

        return this.http.post<T>(url, body, { headers: hd }).pipe(catchError(this.handleError));
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
