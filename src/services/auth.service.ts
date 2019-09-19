import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user): Observable<any> {
    return this.http.post(`${API_URL}/register`, user);
  }

  login(user): Observable<any> {
    return this.http.post(`${API_URL}/login`, user);
  }
}
