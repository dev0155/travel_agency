import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addParams } from './urlParser';
import {environment} from '../environments/environment';

@Injectable()
export class ToursService {

  constructor(private http: HttpClient) {}

  getTours(query = {}): Observable<any> {
    const url = addParams(environment + '/tours/', query);
    return this.http.get(url);
  }
}