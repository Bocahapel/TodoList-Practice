import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-filter',
  imports: [CommonModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilter {
  label = input<string>();
  icon = input<string>();
  active = input<boolean>(false);

  filterClick = output<void>();

  onClick() {
    this.filterClick.emit();
  }
}
