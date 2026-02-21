import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Layout Import
import { Sidebar } from './Layout/sidebar/sidebar';
import { ActiveSpace } from './Layout/active-space/active-space';
import { DetailBar } from './Layout/detail-bar/detail-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, ActiveSpace, DetailBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TodoList');
}
