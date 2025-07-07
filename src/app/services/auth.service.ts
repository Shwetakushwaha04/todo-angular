import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8001';  // Change if different

  constructor(private http: HttpClient, private router: Router) {}

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
    let formData = new FormData();
    formData.append('username',data.email);
    formData.append('password',data.password);
    
    return this.http.post(`${this.apiUrl}/token`, formData).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.access_token);
        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
