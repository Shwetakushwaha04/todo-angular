import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { ErrorComponent } from './error/error';

import { authGuard, logGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: ErrorComponent
  // },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },
  {
    path: 'todos',
    canActivate: [authGuard],
    component: TodosComponent
  },
  {
    path: 'login',
    canActivate: [logGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [logGuard],
    component: RegisterComponent
  },
  {
    path: 'error',
    children: [
      {
        path: '404',
        component: ErrorComponent
      }
    ]
  }
];
