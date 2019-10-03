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
