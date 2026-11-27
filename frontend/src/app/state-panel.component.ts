import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DataStateKind = 'loading' | 'empty' | 'error';

@Component({
  selector: 'fs-state-panel',
  standalone: true,
  template: `
    <section
      class="state-panel"
      [class.state-loading]="kind === 'loading'"
      [class.state-error]="kind === 'error'"
      [attr.role]="kind === 'error' ? 'alert' : 'status'"
      [attr.aria-live]="kind === 'error' ? 'assertive' : 'polite'">
      <span class="state-icon" aria-hidden="true">{{ kind === 'loading' ? '↻' : kind === 'error' ? '!' : '⌕' }}</span>
      <div class="state-copy">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
        @if (actionLabel) {
          <button type="button" class="state-action" (click)="action.emit()">{{ actionLabel }}</button>
        }
      </div>
    </section>
  `
})
export class StatePanelComponent {
  @Input() kind: DataStateKind = 'empty';
  @Input() title = 'No records found';
  @Input() message = 'Try changing your search.';
  @Input() actionLabel = '';
  @Output() action = new EventEmitter<void>();
}
