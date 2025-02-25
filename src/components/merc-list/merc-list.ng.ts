import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { MercCardComponent } from './merc-card.ng';

@Component({
  selector: 'app-merc-list',
  imports: [CommonModule, MercCardComponent],
  template: `
    @for (merc of mercs(); track merc.id) {
      @defer {
        <app-merc-card [merc]="merc" (deleteMerc)="handleDeleteMerc($event)" />
      }
    } @empty {
      <div class="text-center italic">
        You haven't selected anybody for your team. Please select some team
        members to continue.
      </div>
    }
    @if (totalCost() > 0) {
      <button class="btn btn-success" (click)="hireMercs()">
        Pay {{ totalCost() | number }} credits
      </button>
    }
  `,
  host: {
    class: 'flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercListComponent {
  protected readonly mercs = signal<Person[]>([]);

  protected get totalCost() {
    return signal(0);
  }

  protected handleDeleteMerc(id: string) {
    console.log('Deleting merc with id:', id);
  }

  protected hireMercs() {
    console.log('Hiring mercs');
  }
}
