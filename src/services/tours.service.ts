import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITourService } from 'src/store/models/tours/ITourService.model';
import { SERVICES_URL, TOURS_URL } from 'src/endpoints';
import { IHttpTour } from 'src/store/models/tours/ITour.model';
import IResponse from 'src/store/models/IResponse.model';

@Injectable()
export class ToursService {
  constructor(private http: HttpClient) {}

  public getServices(): Observable<ITourService[]> {
    return this.http.get<ITourService[]>(SERVICES_URL);
  }

  public create(tour: IHttpTour): Observable<IResponse> {
    return this.http.post<IResponse>(TOURS_URL, tour);
  }
}
