import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { ToursActions } from '../actions/tours.actions';
import { ToursService } from 'src/services/tours.service';

@Injectable()
export class ToursEffects {
  getTourServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToursActions.getServices.request.type),
      mergeMap(() =>
        this.toursService.getServices().pipe(
          map((services) => {
            return ToursActions.getServices.success({ services });
          }),
          catchError(() => {
            return of(ToursActions.getServices.failure());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toursService: ToursService,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
