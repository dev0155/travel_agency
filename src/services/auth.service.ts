import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';

export interface IAuthResponse {
  user_id: number;
  access_token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/register`, user);
  }

  login(user): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/login`, user);
  }
}
