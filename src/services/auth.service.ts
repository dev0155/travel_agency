import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';
import IRegisterUser from 'src/store/models/auth/IRegisterUser';
import ILoginUser from 'src/store/models/auth/ILoginUser';

export interface IAuthResponse {
  id: number;
  access_token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: IRegisterUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/register`, user);
  }

  login(user: ILoginUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}
