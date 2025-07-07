import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo, TodoIn } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://127.0.0.1:8001';

  constructor(private http: HttpClient) {}

  getTodos = () => {
    return this.http.get<Todo[]>(this.apiUrl + '/todos');
  }

  saveTodo = (todo: TodoIn) => {
    return this.http.post<Todo>(this.apiUrl + '/todos', todo);
  }
}
