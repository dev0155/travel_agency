import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';

import { HotelService } from 'src/services/hotel.service';
import { HotelActions } from '../actions/hotel.actions';
import IHotelForm from '../models/hotel/IHotelForm.model';

@Injectable()
export class HotelEffects {
  createHotel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.createHotel.request.type),
      mergeMap(
        (action: { hotelForm: IHotelForm; images: File[]; type: string }) =>
          this.hotelService.create(action.hotelForm).pipe(
            map(({ objectId }) => {
              const transformedPics = this.transformImgData(action.images);

              console.log(transformedPics);
              return HotelActions.createHotel.success({
                id: objectId,
                images: transformedPics,
              });
            }),
            catchError(() => {
              this.toaster.error(
                'Error :(',
                'Something went wrong with creating hotel.',
                this.toasterOptions
              );
              return of(HotelActions.createHotel.failure());
            })
          )
      ),
      mergeMap((action: { id: number; images: FormData[]; type: string }) => {
        if (!action.id) {
          return EMPTY;
        }
        console.log(action.id);
        return action.images.map((img) => {
          return HotelActions.uploadImages.request({
            image: img,
            hotelId: action.id,
          });
        });
      })
    )
  );

  loadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.uploadImages.request.type),
      mergeMap((action: { image: FormData; hotelId: number; type: string }) => {
        console.log(action.image);
        return this.hotelService.uploadImg(action.hotelId, action.image).pipe(
          map(() => {
            console.log('NICE');
            console.log(action.image);
            return HotelActions.uploadImages.success();
          }),
          catchError(() => {
            this.toaster.error(
              'Error :(',
              'Images were not uploaded.',
              this.toasterOptions
            );
            return of(HotelActions.uploadImages.failure());
          })
        );
      })
    )
  );

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

  private transformImgData(images: File[]): FormData[] {
    const result = [] as FormData[];
    images.map((item) => {
      const fd = new FormData();
      fd.append('file', item);
      fd.forEach((data) => console.log(data));
      result.push(fd);
    });
    return result;
  }
}
