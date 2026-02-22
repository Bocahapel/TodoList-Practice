import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-today-task',
  imports: [],
  templateUrl: './today-task.html',
  styleUrl: './today-task.css',
})
export class TodayTask {
  today = new Date();

  formattedDate = computed(() => {
    const d = this.today;
    return d.toLocaleDateString('en-GB').replace(/\//g, '-');
  });

  dayName = computed(() => {
    return this.today.toLocaleDateString('en-ID', { weekday: 'long' });
  });
}
