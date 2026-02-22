import { Component, computed, signal } from '@angular/core';
import { TaskFilter } from '../task-filter/task-filter';

//primeNg
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

//service
import { TaskStateService } from '../layout-service/task-state.service';

@Component({
  selector: 'app-sidebar',
  imports: [TaskFilter, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(public state: TaskStateService) {}
}
