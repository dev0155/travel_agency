import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import {
  AuthActionTypes,
  RegisterSuccess,
  RegisterFailed,
  LoginSuccess,
  LoginFailed,
} from '../actions/auth.actions';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      mergeMap(({ user }) =>
        this.authService.register(user).pipe(
          map((response) => {
            this.notif.success(
              'Success!',
              'Redirect to home',
              this.notifOptions
            );
            localStorage.setItem('token', response.access_token);
            setTimeout(() => this.router.navigateByUrl('/'), 3000);
            return RegisterSuccess({ id: response.user_id });
          }),
          catchError(({ error }) => {
            this.notif.error('Error!', error.message, this.notifOptions);
            return of(RegisterFailed({ errorMessage: error.message }));
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      mergeMap(({ user }) =>
        this.authService.login(user).pipe(
          map((response) => {
            localStorage.setItem('token', response.access_token);
            this.router.navigateByUrl('/');
            return LoginSuccess({ id: response.user_id });
          }),
          catchError((response) => {
            this.notif.error('Error!', response.error.error, this.notifOptions);
            return of(LoginFailed());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private notif: NotificationsService,
    private router: Router
  ) {}

  private notifOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
