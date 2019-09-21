import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USERS_URL } from 'src/endpoints';
import { IUser } from 'src/store/models/account/IUser';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  public getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${USERS_URL}/${id}`);
  }

  public updateUserById(id: number, user: IUser) {
    return this.http.put(`${USERS_URL}/${id}`, user);
  }
}
