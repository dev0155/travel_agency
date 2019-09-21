import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOTEL_URL, IMAGE_URL } from 'src/endpoints';
import INewHotelForm from 'src/store/models/hotel/INewHotelForm';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public createNewHotel(hotel: INewHotelForm): Observable<number> {
    return this.http.post<number>(HOTEL_URL, hotel);
  }

  public uploadImg(hotelId: number, img: FormData): Observable<any> {
    return this.http.post<any>(`${IMAGE_URL}/upload/${hotelId}`, img);
  }
}
