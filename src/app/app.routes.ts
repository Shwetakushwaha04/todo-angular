import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { ErrorComponent } from './error/error';

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
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
