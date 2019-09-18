import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelInfo } from 'src/store/models/hotels/hotelInfo';
import { Observable } from 'rxjs';
import { HOTEL_URL } from 'src/endpoints';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public create(hotel: HotelInfo): Observable<any> {
    console.log(hotel);
    return this.http.post<HotelInfo>(HOTEL_URL, hotel);
  }
}
