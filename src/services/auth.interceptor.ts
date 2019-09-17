import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private notif: NotificationsService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return next.handle(request).pipe(
        catchError((error) => {
          this.notif.error(error.status.toString(), error.message);
          return throwError(error.message || 'Server error');
        })
      );
    }
  }
}
