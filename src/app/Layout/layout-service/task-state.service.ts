import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskStateService {
  // Use a signal to track the active view
  activeView = signal<'today' | 'all'>('today');
}
