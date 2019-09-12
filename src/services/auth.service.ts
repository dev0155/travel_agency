import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';
import RegisteredUser from 'src/store/models/auth/registerUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: RegisteredUser): Observable<any> {
    return this.http.post<RegisteredUser>(`${API_URL}/register`, user);
  }
}
