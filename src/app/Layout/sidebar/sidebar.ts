import { Component, signal } from '@angular/core';
import { TaskFilter } from '../task-filter/task-filter';

@Component({
  selector: 'app-sidebar',
  imports: [TaskFilter],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  activeFilter = signal<'today' | 'future'>('today');
}
