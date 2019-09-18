import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { HotelService } from 'src/services/hotel.service';
import { HotelActionTypes, CreateFailed } from '../actions/hotels.actions';
import { CreateSuccess } from '../actions/hotels.actions';
import { HotelInfo } from '../models/hotels/hotelInfo';

@Injectable()
export class HotelEffects {
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActionTypes.Create),
      mergeMap(({ info }) =>
        this.hotelService.create(this.transformHotelInfo(info)).pipe(
          map((response) => {
            this.notif.success(
              'Success!',
              'Your hotel was successfully created!',
              this.notifOptions
            );
            return CreateSuccess({ id: response.user_id });
          }),
          catchError(({ error }) => {
            this.notif.error(
              'Something went wrong :(',
              error.message,
              this.notifOptions
            );
            return of(
              CreateFailed({
                error: { code: error.statusCode, message: error.message },
              })
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private hotelService: HotelService,
    private notif: NotificationsService,
    private router: Router
  ) {}

  private notifOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };

  private transformHotelInfo(info): HotelInfo {
    const resultData: HotelInfo = {
      name: info.name,
      phone: info.phone,
      description: info.phone,
    };
    return resultData;
  }
}
