import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';  // Change if different

  constructor(private http: HttpClient) {}

  // REGISTER
  register(data:{email: string, password: string}): Observable<boolean> {
    const payload = { email:data.email, password:data.password };
    return this.http.post(`${this.apiUrl}/register`, payload).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  // LOGIN
  login(data:{email: string, password: string}): Observable<boolean> {
    const payload = { email:data.email, password:data.password };
    return this.http.post(`${this.apiUrl}/login`, payload).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
