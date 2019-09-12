import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/services/auth.service';
import { AuthActionTypes, RegisterSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Register),
      mergeMap(({ user }) =>
        this.authService.register(user).pipe(
          map((id) => RegisterSuccess(id)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
