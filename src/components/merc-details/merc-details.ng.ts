import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-merc-details',
  imports: [],
  template: `
    <div class="text-right"><strong>Height</strong></div>
    <div>{{ currentMerc().height }} cm</div>
    <div class="text-right"><strong>Mass</strong></div>
    <div>{{ currentMerc().mass }} kilos</div>
    <div class="text-right"><strong>Hair Color</strong></div>
    <div>{{ currentMerc().hair_color }}</div>
    <div class="text-right"><strong>Eye Color</strong></div>
    <div>{{ currentMerc().eye_color }}</div>
    <div class="text-right"><strong>Birth Year</strong></div>
    <div>{{ currentMerc().birth_year }}</div>
    <div class="text-right"><strong>Gender</strong></div>
    <div>{{ currentMerc().gender }}</div>
  `,
  host: {
    class:
      'grid grid-cols-[var(--merc-description-columns)] text-xs text-secondary ml-4 gap-x-[6px]',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercDetailsComponent {
  readonly currentMerc = input.required<Person>();
}
