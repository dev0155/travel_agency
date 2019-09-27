import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { ToursActions } from '../actions/tours.actions';
import { ToursService } from 'src/services/tours.service';
import { IHttpTour } from '../models/tours/ITour.model';
import { Router } from '@angular/router';

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

  createTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToursActions.create.request.type),
      mergeMap((action: { tour: IHttpTour; type: string }) =>
        this.toursService.create(action.tour).pipe(
          map(() => {
            this.router.navigateByUrl('/tours');
            return ToursActions.create.success();
          }),
          catchError(() => {
            this.toaster.error(
              'Error :(',
              'Hotel was not created.',
              this.toasterOptions
            );
            return of(ToursActions.create.failure);
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toursService: ToursService,
    private toaster: NotificationsService,
    private router: Router
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
