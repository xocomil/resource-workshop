import { JsonPipe } from '@angular/common';
import { afterNextRender, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MercService } from '../services/merc.service';
import { SwapiService } from '../services/swapi.service';

@Component({
  imports: [RouterOutlet, FormsModule, JsonPipe],
  selector: 'app-root',
  template: `
    <h1 class="text-primary">Welcome to our Star Wars App!</h1>
    <input readonly [ngModel]="personId()" />
    <button class="btn btn-primary" (click)="nextMerc()" type="button">Next</button>
    <div>
      <pre>
personId: {{ personId() }}
        
  personResource loading: {{ personResource.isLoading() | json }}
  personResource status: {{ personResource.status() | json }}
        
  personResource: {{ personResource.value() | json }}
      </pre
      >
    </div>
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

  readonly #swapiService = inject(SwapiService);
  readonly #mercService = inject(MercService);
  readonly #mercOrder = this.#mercService.getMercs();

  protected personId = signal('1');
  protected personResource = this.#swapiService.peopleResource(this.personId);

  constructor() {
    afterNextRender(() => {
      this.nextMerc();
    });
  }

  protected nextMerc() {
    const next = this.#mercOrder.next().value;

    if (next) {
      this.personId.set(next.toString());
    }
  }
}
