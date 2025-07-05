import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-app';
  constructor(public authService: AuthService){}

  logout = () => {
    this.authService.logout();
  }
}
