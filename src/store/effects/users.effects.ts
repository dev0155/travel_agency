import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, concat, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { UsersService } from 'src/services/users.service';
import { UsersActions } from '../actions/users.actions';
import IUser from '../models/IUser.model';
import { CompanyActions } from '../actions/company.actions';

@Injectable()
export class UsersEffects {
  getCurrentId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getCurrentId.request.type),
      mergeMap(() =>
        this.usersService.getCurrentId().pipe(
          mergeMap(({ objectId }) =>
            concat(
              of(UsersActions.getById.request({ id: objectId })),
              of(CompanyActions.getByUserId.request({ id: objectId }))
            )
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getById.request.type),
      mergeMap((action: { id: number; type: string }) => {
        return this.usersService.get(action.id).pipe(
          map((user) =>
            UsersActions.getById.success({
              user,
            })
          ),
          catchError(({ error }) => {
            this.toaster.error('Error :(', error.message, this.toasterOptions);
            return of(UsersActions.getById.failure());
          })
        );
      })
    )
  );

  updateInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updateInfo.request.type),
      mergeMap((action: { info: IUser; type: string }) => {
        return this.usersService.update(action.info).pipe(
          map(() => UsersActions.updateInfo.success({ info: action.info })),
          catchError(({ error }) => {
            this.toaster.error('Error :(', error.message, this.toasterOptions);
            return of(UsersActions.updateInfo.failure());
          })
        );
      })
    )
  );

  updatePassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.updatePassword.request.type),
      mergeMap((action: { password: string; type: string }) => {
        return this.usersService.updatePassword(action.password).pipe(
          map(() => UsersActions.updatePassword.success()),
          catchError((error) => {
            this.toaster.error('Error :(', error.message, this.toasterOptions);
            return of(UsersActions.updatePassword.failure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
