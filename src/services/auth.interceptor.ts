// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';
// import { NotificationsService } from 'angular2-notifications';
// import { AppState } from 'src/store';
// import { Store } from '@ngrx/store';
// import { refresh } from 'src/store/actions/auth.actions';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(
//     private authService: AuthService,
//     private toaster: NotificationsService,
//     private store: Store<AppState>
//   ) {}

//   private toasterOptions = {
//     animate: 'fade',
//     timeOut: 3000,
//     showProgressBar: true,
//   };

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const token = this.authService.getToken('access_token');
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }
//     return new Observable<HttpEvent<any>>((subscriber) => {
//       const originalRequestSubscription = next.handle(request).subscribe(
//         (response: any) => {
//           subscriber.next(response);
//         },
//         ({ error }) => {
//           if (error.statusCode === 401) {
//             this.authService.removeTokens();
//             // this.authService.refresh();
//             this.store.dispatch(refresh.request());
//             console.log('interceptor');
//             this.toaster.error(
//               'Error :(',
//               'You are unauthorized',
//               this.toasterOptions
//             );
//           } else {
//             this.toaster.error(
//               'Error :(',
//               'Something went wrong',
//               this.toasterOptions
//             );
//           }
//           subscriber.error(error);
//         },
//         () => subscriber.complete()
//       );
//       return () => originalRequestSubscription.unsubscribe();
//     });
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isTokenRefreshed: boolean;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const accessToken = this.authService.getToken('access_token');
    if (accessToken) {
      request = this.addTokenToRequest(request, accessToken);
      return next.handle(request).pipe(
        catchError((error) => {
          if (
            error instanceof HttpErrorResponse &&
            error.status === 401 &&
            !this.isTokenRefreshed
          ) {
            return this.handleUnauthorizedError(request, next);
          } else {
            this.isTokenRefreshed = false;
            return throwError(error);
          }
        })
      );
    }
    return next.handle(request);
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handleUnauthorizedError(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    if (this.authService.isAuthenticated()) {
      this.authService.logout();
      return empty();
    }

    this.isTokenRefreshed = true;

    return this.authService.refresh().pipe(
      mergeMap((result) => {
        this.isTokenRefreshed = false;
        request = this.addTokenToRequest(request, result.access_token);

        return next.handle(request);
      })
    );
  }
}
