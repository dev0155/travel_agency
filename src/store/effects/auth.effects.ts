import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import * as AuthActions from 'src/store/actions/auth.actions';
import IRegisterUser from '../models/auth/IRegisterUser';
import { Router } from '@angular/router';
import ILoginUser from '../models/auth/ILoginUser';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setAllRegister.request.type),
      mergeMap((action: { user: IRegisterUser; type: string }) =>
        this.authService.register(action.user).pipe(
          map(({ access_token, refresh_token, objectId }) => {
            this.authService.setTokens(true, access_token, refresh_token);
            this.router.navigateByUrl('/');

            return AuthActions.setAllRegister.success({ id: objectId });
          }),
          catchError(({ error }) => {
            this.toaster.error(
              error.message,
              'Enter another email.',
              this.toasterOptions
            );
            return of(AuthActions.setAllRegister.failure());
          })
        )
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setAllLogin.request.type),
      mergeMap(
        (action: { user: ILoginUser; rememberMe: boolean; type: string }) => {
          return this.authService.login(action.user).pipe(
            map(({ access_token, refresh_token, objectId }) => {
              this.authService.setTokens(
                action.rememberMe,
                access_token,
                refresh_token
              );

              this.router.navigateByUrl('/');
              return AuthActions.setAllLogin.success({ id: objectId });
            }),
            catchError(({ error }) => {
              this.toaster.error(
                error.error,
                'Check your info and try again.',
                this.toasterOptions
              );
              return of(AuthActions.setAllLogin.failure());
            })
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
