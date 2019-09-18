import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HotelService } from 'src/services/hotel.service';
import * as NewHotelAction from 'src/store/actions/hotel.actions';
import { of, forkJoin, EMPTY } from 'rxjs';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
import IError from '../helpers/IError';

@Injectable()
export class NewHotelEffects {
  createNewHotel$ = createEffect(() => {
    console.log('EFFECT');
    return this.actions$.pipe(
      ofType(NewHotelAction.setAllHotelInfo.request.type),
      mergeMap((action: { hotel: IHotel; images: File[]; type: string }) =>
        this.hotelService.createNewHotel(action.hotel).pipe(
          map((response) => {
            console.log(response);
            return NewHotelAction.setAllHotelInfo.success;
          })
        )
      )
    );
  });

  constructor(private actions$: Actions, private hotelService: HotelService) {}

  private transformImage(img: File): FormData {
    const fd = new FormData();
    fd.append('hotelPic[]', img, img.name);
    return fd;
  }
}
