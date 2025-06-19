import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo ;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onDelete() {
    this.todoDelete.emit(this.todo);
  }
}
