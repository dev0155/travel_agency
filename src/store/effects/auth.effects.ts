import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import * as AuthActions from 'src/store/actions/auth.actions';
import IRegisterUser from '../models/auth/IRegisterUser';
import { Router } from '@angular/router';
import ILoginUser from '../models/auth/ILoginUser';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.setAllRegister.request.type),
      mergeMap((action: { user: IRegisterUser; type: string }) =>
        this.authService.register(action.user).pipe(
          map(({ access_token, id }) => {
            sessionStorage.setItem('token', access_token);
            localStorage.setItem('token', access_token);

            this.router.navigateByUrl('/');

            return AuthActions.setAllRegister.success({ id });
          }),
          catchError(() => {
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
            map(({ access_token, id }) => {
              if (action.rememberMe) {
                localStorage.setItem('token', access_token);
              }
              sessionStorage.setItem('token', access_token);
              this.router.navigateByUrl('/');
              return AuthActions.setAllLogin.success({ id });
            }),
            catchError(() => of(AuthActions.setAllLogin.failure()))
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
