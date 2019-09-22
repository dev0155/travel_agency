import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import * as AuthActions from 'src/store/actions/auth.actions';
import IRegisterUser from '../models/auth/IRegisterUser';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import ILoginUser from '../models/auth/ILoginUser';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setAllRegister.request.type),
      mergeMap((action: { user: IRegisterUser; type: string }) =>
        this.authService.register(action.user).pipe(
          map((response) => {
            localStorage.setItem('token', response.access_token);

            this.goToHomePage();

            return AuthActions.setAllRegister.success({
              id: response.user_id,
            });
          })
        )
      ),
      catchError(({ error }) => {
        this.toaster.error('Error :(', error.message, this.toasterOptions);
        return of(
          AuthActions.setAllRegister.failure()
          // {error: { code: error.statusCode, message: error.message}
        );
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setAllLogin.request.type),
      mergeMap(
        (action: { user: ILoginUser; rememberMe: boolean; type: string }) => {
          return this.authService.login(action.user).pipe(
            map((response) => {
              if (action.rememberMe) {
                localStorage.setItem('token', response.access_token);
              } else {
                sessionStorage.setItem('token', response.access_token);
              }

              this.goToHomePage();

              return AuthActions.setAllLogin.success({
                id: response.user_id,
              });
            }),
            catchError(() => {
              // this.toaster.error('Error :(', error.message, this.toasterOptions);
              return of(
                AuthActions.setAllLogin.failure()
                // {error: { code: error.statusCode, message: error.message}
              );
            })
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toaster: NotificationsService,
    private router: Router
  ) {}

  private goToHomePage(): void {
    this.router.navigateByUrl('/');
    // setTimeout(() => this.router.navigateByUrl('/'), 3000);
  }

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
