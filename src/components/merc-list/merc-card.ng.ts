import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-merc-card',
  imports: [CommonModule],
  template: `
    <div class="text-center">{{ merc().name }}</div>
    <div class="font-bold text-center text-xl text-green-800">
      {{ merc().hire_in_credits | number }} credits
    </div>
    <div class="text-right">
      <button
        type="button"
        class="btn btn-xs btn-warning"
        (click)="handleDelete()"
      >
        Delete
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex flex-col gap-1 border hover:border-green-500 border-green-800 text-green-500 hover:text-green-500 px-2 pb-2 first:rounded-t-md last:rounded-b-md',
  },
})
export class MercCardComponent {
  readonly merc = input.required<Person>();

  readonly deleteMerc = output<string>();

  protected handleDelete() {
    this.deleteMerc.emit(this.merc().id);
  }
}
