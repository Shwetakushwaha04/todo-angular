import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { AddTodoComponent } from "../add-todo/add-todo";
import { TodoItemComponent } from '../todo-item/todo-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, AddTodoComponent],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

 ngOnInit(): void {
  let todosString = localStorage.getItem("todos");
  this.todos = todosString ? JSON.parse(todosString) : [];
}

addTodo(todo: Todo): void {
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}

deleteTodo(todo: Todo): void {
  this.todos = this.todos.filter(t => t !== todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
}
