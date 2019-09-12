import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import {
  AuthActionTypes,
  RegisterSuccess,
  RegisterFailed,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      mergeMap(({ user }) =>
        this.authService.register(user).pipe(
          map((id) => RegisterSuccess(id)),
          catchError((response) => {
            console.log(response.error.message);
            return of(RegisterFailed({ errorMessage: response.error.message }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
