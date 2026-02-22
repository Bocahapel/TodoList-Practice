import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-task-main',
  imports: [],
  templateUrl: './task-main.html',
  styleUrl: './task-main.css',
})
export class TaskMain {
  currentDate = input.required<Date>();

  formattedDate = computed(() => {
    const d = this.currentDate();
    return d.toLocaleDateString('en-GB').replace(/\//g, '-');
  });

  dayName = computed(() => {
    return this.currentDate().toLocaleDateString('en-ID', { weekday: 'long' });
  });
}
