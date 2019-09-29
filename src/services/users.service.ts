import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USERS_URL, API_URL } from 'src/endpoints';
import IResponse from 'src/store/models/IResponse.model';
import IUser from 'src/store/models/IUser.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  public get(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${USERS_URL}/${id}`);
  }

  public getCurrentId(): Observable<IResponse> {
    return this.http.get<IResponse>(`${API_URL}/me`);
  }

  public update(user: IUser): Observable<IResponse> {
    return this.http.put<IResponse>(`${USERS_URL}`, user);
  }

  public updatePassword(password: string): Observable<IResponse> {
    return this.http.put<IResponse>(`${USERS_URL}/password`, { password });
  }
}
