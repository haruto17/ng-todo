import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  todo = new FormControl('', { nonNullable: true });
  @Output() todoItemEvent = new EventEmitter<string>();

  onClick() {
    if (this.todo.value.length > 0) {
      this.todoItemEvent.emit(this.todo.value);
      this.todo.reset();
    }
  }
}
