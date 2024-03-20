import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todo_list: string[] = [];

  addTodoItem(newItem: string) {
    this.todo_list.push(newItem);
  }
}
