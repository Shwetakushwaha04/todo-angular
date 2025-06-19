import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../types';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      sno: Math.floor(Math.random() * 10000),
      title: this.title,
      desc: this.desc,
      active: true,
      todo: undefined
    };
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }
}
