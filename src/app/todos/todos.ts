import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo, User } from '../types';
import { AddTodoComponent } from "../components/add-todo/add-todo";
import { TodoItemComponent } from '../components/todo-item/todo-item';

import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, AddTodoComponent],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe(todos => {
    //   this.todos = todos
    // });
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
