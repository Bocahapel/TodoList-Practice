import { Component } from '@angular/core';

//service
import { TaskStateService } from '../layout-service/task-state.service';
import { TodayTask } from '../../feature/tasks/today-task/today-task';
import { AllTask } from '../../feature/tasks/all-task/all-task';

@Component({
  selector: 'app-active-space',
  imports: [TodayTask, AllTask],
  templateUrl: './active-space.html',
  styleUrl: './active-space.css',
})
export class ActiveSpace {
  constructor(public state: TaskStateService) {}
}
