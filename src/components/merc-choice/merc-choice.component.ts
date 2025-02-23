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
import { MercService } from '../../services/merc.service';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-merc-choice',
  imports: [CommonModule],
  template: `
    @if (personResource.isLoading()) {
      <div>Loading...</div>
    } @else {
      <h2 class="m-0">{{ currentMerc().name }}</h2>
      <div
        class="grid grid-cols-[var(--merc-description-columns)] text-xs text-secondary ml-4 gap-x-[6px]"
      >
        <div class="text-right"><strong>Height</strong></div>
        <div>{{ currentMerc().height }} cm</div>
        <div class="text-right"><strong>Mass</strong></div>
        <div>{{ currentMerc().mass }} k</div>
        <div class="text-right"><strong>Hair Color</strong></div>
        <div>{{ currentMerc().hair_color }}</div>
        <div class="text-right"><strong>Eye Color</strong></div>
        <div>{{ currentMerc().eye_color }}</div>
        <div class="text-right"><strong>Birth Year</strong></div>
        <div>{{ currentMerc().birth_year }}</div>
        <div class="text-right"><strong>Gender</strong></div>
        <div>{{ currentMerc().gender }}</div>
      </div>
      <div class="flex gap-4">
        <button class="btn btn-error grow" (click)="nextMerc()">
          Skip Merc
        </button>
        <button class="btn btn-success grow" (click)="nextMerc()">
          Hire for {{ currentMerc().hire_in_credits | number }} credits
        </button>
      </div>
    }
  `,
  styleUrl: './merc-choice.component.css',
  host: {
    class: 'border border-primary p-4 flex flex-col gap-2 rounded-t-md',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercChoiceComponent {
  readonly #swapiService = inject(SwapiService);
  readonly #mercService = inject(MercService);
  readonly #mercOrder = this.#mercService.getMercs();

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
    const next = this.#mercOrder.next().value;

    if (next) {
      this.personId.set(next.toString());
    }
  }
}
