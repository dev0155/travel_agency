import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { COMPANIES_URL, USERS_URL } from 'src/endpoints';
import IResponse from 'src/store/models/IResponse.model';
import ICompany from 'src/store/models/ICompany.model';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private http: HttpClient) {}

  public create(company: ICompany): Observable<IResponse> {
    return this.http.post<IResponse>(`${COMPANIES_URL}`, company);
  }

  public getByOwnId(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(`${COMPANIES_URL}/${id}`);
  }

  public update(id: number, company: ICompany): Observable<IResponse> {
    return this.http.put<IResponse>(`${COMPANIES_URL}/${id}`, company);
  }

  public getByUserId(userId: number): Observable<ICompany> {
    return this.http.get<ICompany>(`${USERS_URL}/${userId}/company`);
  }
}
