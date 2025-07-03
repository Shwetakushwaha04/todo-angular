import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): boolean {
    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const user = users.find((u: any) => u.email === email && u.password === password);
    return !!user;
  }

  register(email: string, password: string): boolean {
    const usersJSON = localStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const userExists = users.some((u: any) => u.email === email);
    if (userExists) return false;

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
