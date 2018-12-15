import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 || err.status === 403) {
                this.authService.logout();
                this.router.navigate(['/signin'], { queryParams: { returnUrl: this.router.url } });
            }

            const error = err.error.msj || err.statusText;
            return throwError(error);
        }));
    }
}
