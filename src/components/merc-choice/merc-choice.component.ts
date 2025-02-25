import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { emptyPerson } from '../../models/person.model';
import { SwapiService } from '../../services/swapi.service';
import { MercDetailsComponent } from '../merc-details/merc-details.ng';

@Component({
  selector: 'app-merc-choice',
  imports: [CommonModule, MercDetailsComponent],
  template: `
    @if (personResource.isLoading()) {
      <div>Loading...</div>
    } @else {
      <h2 class="m-0">{{ currentMerc().name }}</h2>
      @defer {
        <app-merc-details [currentMerc]="currentMerc()" />
      }
      <div class="flex gap-4">
        <button class="btn btn-error grow" (click)="nextMerc()">
          Skip Merc
        </button>
        <button class="btn btn-success grow" (click)="hireMerc()">
          Hire for {{ currentMerc().hire_in_credits | number }} credits
        </button>
      </div>
    }
  `,
  host: {
    class: 'border border-primary p-4 flex flex-col gap-2 rounded-t-md',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercChoiceComponent {
  readonly #swapiService = inject(SwapiService);

  protected personId = signal('1');
  protected personResource = this.#swapiService.peopleResource(this.personId);

  protected currentMerc = computed(() => {
    const value = this.personResource.value();

    return value ? value : emptyPerson();
  });

  constructor() {
    afterNextRender(() => {
      this.nextMerc();
    });
  }

  protected nextMerc() {
    console.log('Next merc');
  }

  protected hireMerc() {
  console.log('Hire merc');

    this.nextMerc();
  }
}
