import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AccountUserActions from 'src/store/actions/account/accountUser.actions';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/store/models/account/IUser';

@Injectable()
export class AccountUserEffects {
  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountUserActions.setAllAccountUser.request.type),
      mergeMap((action: { id: number; user: IUser; type: string }) =>
        this.userService.updateUserById(action.id, action.user).pipe(
          map((updated) => {
            return AccountUserActions.setAllAccountUser.success({
              user: updated as IUser,
            });
          })
        )
      ),
      catchError((error) => {
        return of(AccountUserActions.setAllAccountUser.failure());
      })
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
