import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { NotificationsService } from 'angular2-notifications';
import * as NewHotelActions from 'src/store/actions/newHotel.actions';
import INewHotelForm from '../models/hotel/INewHotelForm';
import { HotelService } from 'src/services/hotel.service';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class NewHotelEffects {
  createHotel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewHotelActions.setAllHotelForm.request.type),
      mergeMap(
        (action: { hotelForm: INewHotelForm; images: File[]; type: string }) =>
          this.hotelService.createNewHotel(action.hotelForm).pipe(
            map((response) => {
              const transformedPics = this.transformImgData(action.images);
              return NewHotelActions.setAllHotelForm.success({
                id: response.id,
                images: transformedPics,
              });
            }),
            catchError(() => {
              this.toaster.error(
                'Error :(',
                'Something went wrong with creating hotel.',
                this.toasterOptions
              );
              return of(NewHotelActions.setAllHotelForm.failure());
            })
          )
      ),
      mergeMap((action: { id: number; images: FormData[]; type: string }) => {
        if (!action.id) {
          return EMPTY;
        }
        return action.images.map((img) => {
          return NewHotelActions.setAllHotelImages.request({
            image: img,
            hotelId: action.id,
          });
        });
      })
    )
  );

  loadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewHotelActions.setAllHotelImages.request.type),
      mergeMap((action: { image: FormData; hotelId: number; type: string }) => {
        return this.hotelService.uploadImg(action.hotelId, action.image).pipe(
          map((res) => NewHotelActions.setAllHotelImages.success()),
          catchError(() => {
            this.toaster.error(
              'Error :(',
              'Images were not uploaded.',
              this.toasterOptions
            );
            return of(NewHotelActions.setAllHotelImages.failure());
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
    for (const item of images) {
      const fd = new FormData();
      fd.append('file', item);
      result.push(fd);
    }
    console.log(result);
    return result;
  }
}
