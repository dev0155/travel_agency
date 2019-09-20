import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };

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
    }
    return new Observable<HttpEvent<any>>((subscriber) => {
      const originalRequestSubscription = next.handle(request).subscribe(
        (response: any) => {
          subscriber.next(response);
        },
        ({ error }) => {
          if (error.statusCode === 401) {
            localStorage.clear();
            sessionStorage.clear();

            this.toaster.error(
              'Error :(',
              'You are unauthorized',
              this.toasterOptions
            );
          } else {
            this.toaster.error(
              'Error :(',
              error.message || error.error,
              this.toasterOptions
            );
          }
          subscriber.error(error);
        },
        () => subscriber.complete()
      );
      return () => originalRequestSubscription.unsubscribe();
    });
  }
}
