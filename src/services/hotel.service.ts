import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HOTEL_URL, IMAGE_URL } from 'src/endpoints';
import IHotelForm from 'src/store/models/hotel/IHotelForm.model';
import IUploadedImg from 'src/store/models/hotel/IUploadedImg.model';
import IResponse from 'src/store/models/IResponse.model';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public create(hotel: IHotelForm): Observable<IResponse> {
    return this.http.post<IResponse>(HOTEL_URL, hotel);
  }

  public uploadImg(hotelId: number, img: FormData): Observable<IUploadedImg> {
    return this.http.post<IUploadedImg>(`${IMAGE_URL}/upload/${hotelId}`, img);
  }
}
