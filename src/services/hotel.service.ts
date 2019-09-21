import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOTEL_URL, IMAGES_URL } from 'src/endpoints';
import INewHotelForm from 'src/store/models/hotel/INewHotelForm';
import IUploadedImg from 'src/store/models/hotel/IUploadedImg';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public createNewHotel(hotel: INewHotelForm): Observable<IHotel> {
    return this.http.post<IHotel>(HOTEL_URL, hotel);
  }

  public uploadImg(hotelId: number, img: FormData): Observable<IUploadedImg> {
    return this.http.post<IUploadedImg>(`${IMAGES_URL}/upload/${hotelId}`, img);
  }
}
