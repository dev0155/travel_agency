import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';

import { HotelService } from 'src/services/hotel.service';
import { HotelActions } from '../actions/hotel.actions';
import IHotelForm from '../models/hotel/IHotelForm.model';
import { IHotelResponse } from '../models/hotel/IHotelResponse.model';
import IAddress from '../models/IAddress.model';
import { IHotel } from 'src/interfaces/basics/hotel.model';

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

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HotelActions.getAll.request.type),
      mergeMap(() =>
        this.hotelService.getAll().pipe(
          mergeMap((hotels) => {
            return this.hotelService.getAddresses().pipe(
              map((response) => {
                const result = this.getHotelsWithAddresses(hotels, response);
                return HotelActions.getAll.success({
                  hotels: result,
                });
              }),
              catchError(() => of(HotelActions.getAll.failure()))
            );
          })
        )
      )
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
      result.push(fd);
    });
    return result;
  }

  private getAddressesIds(hotels: IHotelResponse[]) {
    const ids: number[] = [];
    hotels.map((item) => ids.push(item.addressId));
    return ids;
  }

  private getHotelsAddresses(
    allAddresses: IAddress[],
    hotels: IHotelResponse[]
  ) {
    const addresses = [] as IAddress[];
    const hotelAddressesIds = this.getAddressesIds(hotels);
    allAddresses.map((item) => {
      if (hotelAddressesIds.includes(item.id)) {
        addresses.push(item);
      }
    });
    return addresses;
  }

  private getHotelsWithAddresses(hotels, allAddresses): IHotel[] {
    const hotelsWithAddresses = [];
    const addresses = this.getHotelsAddresses(allAddresses, hotels);
    const zip = (arr1, arr2) => arr1.map((item, index) => [item, arr2[index]]);

    zip(hotels, addresses).map((item) =>
      hotelsWithAddresses.push({ ...item[0], address: item[1] })
    );

    return hotelsWithAddresses;
  }
}
