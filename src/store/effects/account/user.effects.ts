import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AccountUserActions from 'src/store/actions/account/accountUser.actions';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/store/models/account/IUser';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AccountUserEffects {
  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountUserActions.setAllAccountUser.request.type),
      mergeMap((action: { id: number; user: IUser; type: string }) =>
        this.userService.updateUserById(action.id + 1, action.user).pipe(
          map((updated) => {
            return AccountUserActions.setAllAccountUser.success({
              user: updated as IUser,
            });
          }),
          catchError(() => {
            this.toaster.error(
              'Error :(',
              'Something went wrong. Your user info has not been updated.',
              this.toasterOptions
            );
            return of(AccountUserActions.setAllAccountUser.failure());
          })
        )
      )
    )
  );

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private toaster: NotificationsService
  ) {}
}
