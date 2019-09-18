import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  public logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    // some code from back-end

    this.router.navigateByUrl('/login');
  }
}
