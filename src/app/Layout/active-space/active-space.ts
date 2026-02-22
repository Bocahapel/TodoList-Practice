import { Component } from '@angular/core';
import { Tasks } from '../../feature/tasks/tasks';

@Component({
  selector: 'app-active-space',
  imports: [Tasks],
  templateUrl: './active-space.html',
  styleUrl: './active-space.css',
})
export class ActiveSpace {}
