import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { MenuItem } from './menu/menu-item/menu-item';

@Component({
  imports: [RouterOutlet, MenuItem, Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');
}
