import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ToursService {
  API_URL: string = 'https://api.myjson.com/bins/hqm0d';

  constructor(private http: HttpClient) {}

  getTours(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
