import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_URL } from 'src/endpoints';
import IRegisterUser from 'src/store/models/auth/IRegisterUser';
import ILoginUser from 'src/store/models/auth/ILoginUser';
import { map } from 'rxjs/operators';

export interface IAuthResponse {
  objectId: number;
  access_token: string;
  refresh_token: string;
  status?: number;
}
@Injectable()
export class AuthService {
  private jwtHelper;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  public register(user: IRegisterUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/register`, user);
  }

  public login(user: ILoginUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${API_URL}/login`, user);
  }

  public refresh(): Observable<IAuthResponse> {
    const refreshToken = this.getToken('refresh_token');
    return this.http
      .post<IAuthResponse>(`${API_URL}/refresh/${refreshToken}`, null)
      .pipe(
        map((result) => {
          if (result.status === 200) {
            this.setTokens(true, result.access_token, result.refresh_token);
            return result;
          }
        })
      );
  }

  public logout() {
    this.removeTokens();
  }

  public isAuthenticated(): boolean {
    const token = this.getToken('access_token');
    return token && !this.jwtHelper.isTokenExpired(token) ? true : false;
  }

  public setTokens(
    rememberMe: boolean,
    access_token: string,
    refresh_token: string
  ) {
    rememberMe
      ? localStorage.setItem('access_token', access_token)
      : sessionStorage.setItem('access_token', access_token);

    localStorage.setItem('refresh_token', refresh_token);
  }

  public getToken(type: string) {
    return localStorage.getItem(type) || sessionStorage.getItem(type);
  }

  public removeTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.removeItem('access_token');
  }
}
