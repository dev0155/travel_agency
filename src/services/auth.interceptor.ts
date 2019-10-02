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
    const token = this.authService.getToken('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
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
            this.authService.removeTokens();

            this.toaster.error(
              'Error :(',
              'You are unauthorized',
              this.toasterOptions
            );
          } else {
            this.toaster.error(
              'Error :(',
              'Something went wrong',
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
