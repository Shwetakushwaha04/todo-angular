import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

interface User {
  sub: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';  // Change if different

  user!: User;

  constructor(private http: HttpClient, private router: Router) {
    this.initSession();
  }

  // REGISTER
  register(email: string, password: string): Observable<boolean> {
    const payload = { email, password };
    return this.http.post(`${this.apiUrl}/register`, payload).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    let token = localStorage.getItem('token');
    return token ? token : '';
  }

  initSession = () => {
    let token = this.getToken();
    this.user = jwtDecode(token);
  }

  getUser = () => {
    return this.user ? this.user.name : '';
  }

  // LOGIN
  // login(email: string, password: string): Observable<boolean> {
    
    // const payload = { email, password }; //formdata
    // return this.http.post(`${this.apiUrl}/token`, payload).pipe(
    //   map((res: any) => {
    //     localStorage.setItem('token', res.token);
    //     return true;
    //   }),
    //   catchError(() => of(false))
    // );
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
