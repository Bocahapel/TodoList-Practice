import { Component } from '@angular/core';
import { TaskMain } from './task-main/task-main';

@Component({
  selector: 'app-tasks',
  imports: [TaskMain],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
