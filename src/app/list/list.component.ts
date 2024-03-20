import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() list: string[] = [];

  onCheck(event: any) {
    const checkbox = event.target;
    const li = checkbox.parentElement;
    if (!checkbox.checked) {
      li.style.textDecorationLine = 'none';
    } else if (checkbox.checked) {
      li.style.textDecorationLine = 'line-through';
    }
  }
}
