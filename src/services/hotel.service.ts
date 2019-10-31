import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HOTEL_URL, IMAGES_URL, ADDRESS_URL } from 'src/endpoints';
import IUploadedImg from 'src/store/models/hotel/IUploadedImg.model';
import IResponse from 'src/store/models/IResponse.model';
import IAddress from 'src/store/models/IAddress.model';
import {
  IHttpAllHotels,
  IHotelForm,
} from 'src/store/models/hotel/IHttpHotels.model';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public create(hotel: IHotelForm): Observable<IResponse> {
    return this.http.post<IResponse>(HOTEL_URL, hotel);
  }

  public uploadImg(hotelId: number, img: FormData): Observable<IUploadedImg> {
    return this.http.post<IUploadedImg>(`${IMAGES_URL}/upload/${hotelId}`, img);
  }

  public getAll(params?: any): Observable<IHttpAllHotels> {
    return this.http.get<IHttpAllHotels>(HOTEL_URL, { params });
  }

  public search(params?: any): Observable<IHttpAllHotels> {
    return this.http.get<IHttpAllHotels>(
      `${HOTEL_URL}/find/search=${params.target}`,
      { params }
    );
  }

  public getAddresses(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(ADDRESS_URL);
  }

  public getAddress(id: number): Observable<IAddress> {
    return this.http.get<IAddress>(ADDRESS_URL + `/${id}`);
  }
}
