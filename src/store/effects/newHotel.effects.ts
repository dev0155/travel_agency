import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import * as NewHotelActions from 'src/store/actions/newHotel.actions';
import INewHotelForm from '../models/hotel/INewHotelForm';
import { HotelService } from 'src/services/hotel.service';

@Injectable()
export class NewHotelEffects {
  // createHotel$ = createEffect();

  constructor(
    private actions$: Actions,
    private hotelService: HotelService,
    private toaster: NotificationsService
  ) {}

  private toasterOptions = {
    animate: 'fade',
    timeOut: 3000,
    showProgressBar: true,
  };
}
