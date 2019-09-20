import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOTEL_URL, IMAGES_URL } from 'src/endpoints';
import INewHotelForm from 'src/store/models/hotel/INewHotelForm';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public createNewHotel(hotel: INewHotelForm) {
    return this.http.post<number>(HOTEL_URL, hotel);
  }

  public uploadImg(hotelId: number, img: FormData) {
    return this.http.post<any>(`${IMAGES_URL}/upload/${hotelId}`, img);
  }
}
