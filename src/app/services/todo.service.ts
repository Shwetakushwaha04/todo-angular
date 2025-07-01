import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo, TodoIn } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodos = () => {
    return this.http.get<Todo[]>('http://localhost:8000/todos');
  }

  saveTodo = (todo: TodoIn) => {
    return this.http.post<Todo>('http://localhost:8000/todos', todo);
  }
}
