import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import {
  AuthActionTypes,
  RegisterSuccess,
  RegisterFailed,
} from '../actions/auth.actions';
import { NotificationsService } from 'angular2-notifications';
@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      mergeMap(({ user }) =>
        this.authService.register(user).pipe(
          map((id) => {
            this.notif.success(
              'Success!',
              'Redirect to login page',
              this.notifOptions
            );
            return RegisterSuccess(id);
          }),
          catchError(({ error }) => {
            this.notif.error('Error!', error.message, this.notifOptions);
            return of(RegisterFailed({ errorMessage: error.message }));
          })
        )
      )
    )
  );

  private notifOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private notif: NotificationsService
  ) {}
}
