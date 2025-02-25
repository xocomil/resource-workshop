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
import { MercDetailsComponent } from '../merc-details/merc-details.ng';

@Component({
  selector: 'app-merc-choice',
  imports: [CommonModule, MercDetailsComponent],
  template: `
    <h2 class="m-0">{{ currentMerc().name }}</h2>
    @defer {
      <app-merc-details [currentMerc]="currentMerc()" />
    }
    <div class="flex gap-4">
      <button class="btn btn-error grow" (click)="nextMerc()">Skip Merc</button>
      <button class="btn btn-success grow" (click)="hireMerc()">
        Hire for {{ currentMerc().hire_in_credits | number }} credits
      </button>
    </div>
  `,
  host: {
    class: 'border border-primary p-4 flex flex-col gap-2 rounded-t-md',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercChoiceComponent {
  protected personId = signal('1');

  protected currentMerc = signal(emptyPerson());

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
