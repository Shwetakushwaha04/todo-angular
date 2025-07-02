import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos';
import { Unauthorized } from './error/unauthorized/unauthorized';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'error/401',
    component: Unauthorized
  },
];
