import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { NotificationsService } from 'angular2-notifications';
import * as NewHotelActions from 'src/store/actions/newHotel.actions';
import INewHotelForm from '../models/hotel/INewHotelForm';
import { HotelService } from 'src/services/hotel.service';

@Injectable()
export class NewHotelEffects {
  // createHotel$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(NewHotelActions.setAllHotelForm.request.type),
  //     mergeMap(
  //       (action: { hotelForm: INewHotelForm; images: File[]; type: string }) =>
  //         this.hotelService.createNewHotel(action.hotelForm).pipe()
  //     )
  //   )
  // );

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

  private transformImg(img: File): FormData {
    const formDataImg = new FormData();
    formDataImg.append('file', img);
    return formDataImg;
  }
}
