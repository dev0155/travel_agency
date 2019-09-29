import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITourService } from 'src/store/models/tours/ITourService.model';
import { SERVICES_URL, TOURS_URL } from 'src/endpoints';
import { IHttpTour } from 'src/store/models/tours/ITour.model';
import IResponse from 'src/store/models/IResponse.model';

import { addParams } from './urlParser';
import {environment} from '../environments/environment';

@Injectable()
export class ToursService {

  constructor(private http: HttpClient) {}

  getTours(query = {}): Observable<any> {
    const url = addParams(environment.API_URL + '/tours/', query);
    return this.http.get(url);
  }

  public getServices(): Observable<ITourService[]> {
    return this.http.get<ITourService[]>(SERVICES_URL);
  }

  public create(tour: IHttpTour): Observable<IResponse> {
    return this.http.post<IResponse>(TOURS_URL, tour);
  }
}
