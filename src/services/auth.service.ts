import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/endpoints';
import { UserToRegister, UserToLogIn } from 'src/store/models/auth/authUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  register(user: UserToRegister): Observable<any> {
    return this.http.post<UserToRegister>(`${API_URL}/register`, user);
  }

  login(user: UserToLogIn): Observable<any> {
    return this.http.post<UserToLogIn>(`${API_URL}/login`, user);
  }

  public logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    // some code from back-end

    this.router.navigateByUrl('/login');
  }
}