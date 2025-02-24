import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merc-list',
  imports: [CommonModule],
  template: `<p>MercListComponent works! Can you see me? bruh...</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MercListComponent {}
