import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MercChoiceComponent } from '../components/merc-choice/merc-choice.component';
import { MercListComponent } from '../components/merc-list/merc-list.ng';

@Component({
  imports: [FormsModule, MercChoiceComponent, MercListComponent, RouterOutlet],
  selector: 'app-root',
  template: `
    <h1 class="text-primary col-span-2">Pick your team!</h1>

    <app-merc-choice class="border-secondary" />

    <app-merc-list />

    <router-outlet />
  `,
  host: {
    class:
      'container mx-auto px-4 mt-4 w-11/12 card shadow-xl bg-base-200 grid gap-2 grid-cols-[var(--main-layout-columns)]',
  },
})
export class AppComponent {
  title = 'Star Wars Merc Finder';
}
