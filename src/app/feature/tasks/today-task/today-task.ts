import { Component, computed, signal } from '@angular/core';

import { type Tasks } from './tasks.model';

@Component({
  selector: 'app-today-task',
  imports: [],
  templateUrl: './today-task.html',
  styleUrl: './today-task.css',
})
export class TodayTask {
  tasks = signal<Tasks[]>([
    {
      id: 1,
      title: 'Finalize Project Proposal',
      subTitle: 'Marketing Campaign 2026',
      description: 'Complete the final draft of the Q2 marketing strategy.',
      startDate: new Date(2026, 2, 1),
      dueDate: new Date(2026, 2, 5),
      additionalNote: 'Check with the design team for assets.',
    },
    {
      id: 2,
      title: 'Learn Angular',
      subTitle: 'Check the ongoing project',
      description: 'Complete the final draft of the Q2 marketing strategy.',
      startDate: new Date(2026, 2, 1),
      dueDate: new Date(2026, 2, 5),
      additionalNote: 'Check with the design team for assets.',
    },
    {
      id: 3,
      title: 'Learn Java',
      subTitle: 'Learn about OOP',
      description: 'Complete the final draft of the Q2 marketing strategy.',
      startDate: new Date(2026, 2, 1),
      dueDate: new Date(2026, 2, 5),
      additionalNote: 'Check with the design team for assets.',
    },
  ]);

  today = new Date();
  selectedTask = signal<Tasks | null>(null);

  formattedDate = computed(() => {
    const d = this.today;
    return d.toLocaleDateString('en-GB').replace(/\//g, '-');
  });

  dayName = computed(() => {
    return this.today.toLocaleDateString('en-ID', { weekday: 'long' });
  });

  onAddNew() {
    console.log('Add New Clicked');
  }

  viewDetail(task: Tasks) {
    this.selectedTask.set(task);
    console.log('Viewing task:', task.title);
  }
}
