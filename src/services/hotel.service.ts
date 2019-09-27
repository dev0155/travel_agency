import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HOTEL_URL, IMAGES_URL, ADDRESS_URL } from 'src/endpoints';
import IHotelForm from 'src/store/models/hotel/IHotelForm.model';
import IUploadedImg from 'src/store/models/hotel/IUploadedImg.model';
import IResponse from 'src/store/models/IResponse.model';
import { IHotelResponse } from 'src/store/models/hotel/IHotelResponse.model';
import IAddress from 'src/store/models/IAddress.model';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public create(
    hotel: IHotelForm
  ): Observable<{ hotelId: number; response: IResponse }> {
    return this.http.post<{ hotelId: number; response: IResponse }>(
      HOTEL_URL,
      hotel
    );
  }

  public uploadImg(hotelId: number, img: FormData): Observable<IUploadedImg> {
    return this.http.post<IUploadedImg>(`${IMAGES_URL}/upload/${hotelId}`, img);
  }

  public getAll(): Observable<IHotelResponse[]> {
    return this.http.get<IHotelResponse[]>(HOTEL_URL);
  }

  public getAddresses(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(ADDRESS_URL);
  }

  public getAddress(id: number): Observable<IAddress> {
    return this.http.get<IAddress>(ADDRESS_URL + `/${id}`);
  }
}
