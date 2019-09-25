import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITourService } from 'src/store/models/tours/ITourService.model';
import { SERVICES_URL } from 'src/endpoints';

@Injectable()
export class ToursService {
  constructor(private http: HttpClient) {}

  public getServices(): Observable<ITourService[]> {
    return this.http.get<ITourService[]>(SERVICES_URL);
  }
}
