import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `
    <h1 class="text-primary">Welcome to our Star Wars App!</h1>
  <router-outlet />
  `,
  styleUrl: './app.component.css',
  host: {
    class: 'prose prose-base container mx-auto px-8 mt-4 card shadow-xl bg-base-200'
  }
})
export class AppComponent {
  title = 'xocomil';
}
