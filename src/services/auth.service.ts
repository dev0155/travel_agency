import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';
import IRegisterUser from 'src/store/models/auth/IRegisterUser';
import ILoginUser from 'src/store/models/auth/ILoginUser';

export interface IAuthResponse {
  objectId: number;
  access_token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(user: IRegisterUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/register`, user);
  }

  public login(user: ILoginUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/login`, user);
  }

  public logout() {
    this.removeTokens();
  }

  public isAuthenticated(): boolean {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    return token ? true : false;
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
  }

  public removeTokens(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}
