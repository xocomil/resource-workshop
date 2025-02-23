import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MercChoiceComponent } from '../components/merc-choice/merc-choice.component';

@Component({
  imports: [MercChoiceComponent, RouterOutlet, FormsModule],
  selector: 'app-root',
  template: `
    <h1 class="text-primary">Welcome to our Star Wars App!</h1>

    <app-merc-choice class="border-secondary" />

    <router-outlet />
  `,
  styleUrl: './app.component.css',
  host: {
    class:
      'prose prose-base container mx-auto px-8 mt-4 card shadow-xl bg-base-200',
  },
})
export class AppComponent {
  title = 'Star Wars Merc Finder';
}
