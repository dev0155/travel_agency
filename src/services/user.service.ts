import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { USERS_URL } from 'src/endpoints';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(USERS_URL);
  }

  getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${USERS_URL}/${id}`);
  }
}
