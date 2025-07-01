import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { TodoService } from '../../services/todo.service';
import { Todo, TodoIn } from '../../types';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodoComponent {
  // title: string = '';
  // desc: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  loading = false;
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      title: new FormControl('', {validators: [Validators.required, Validators.maxLength(20)]}),
      desc: new FormControl('', {validators: [Validators.required, Validators.maxLength(50)]}),
    })
  }

  onSubmit() {
    if(this.todoForm.valid){
      this.todoService.saveTodo(this.todoForm.value).subscribe({
        next: (newTodo) => {
          this.todoAdd.emit(newTodo);
          this.todoForm.reset();
        },
        error: (err) => {
          console.log(err)
        }
      });
    }else {
      alert('invalid input');
    }
  }
}
