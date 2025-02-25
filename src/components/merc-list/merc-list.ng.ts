import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamResource } from '../../services/team.ng';
import { MercCardComponent } from './merc-card.ng';

@Component({
  selector: 'app-merc-list',
  imports: [CommonModule, MercCardComponent],
  template: `
    @for (merc of mercsResource.value(); track merc.id) {
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
  readonly #team = inject(TeamResource);
  protected readonly mercsResource = this.#team.team;

  protected get totalCost() {
    return this.#team.totalCost;
  }

  protected handleDeleteMerc(id: string) {
    this.#team.deleteTeamMember(id);
  }

  protected hireMercs() {
    this.#team.hireTeam();
  }
}
