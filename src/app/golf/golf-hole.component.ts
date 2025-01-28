import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-golf-hole',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Your Score For This Hole {{ score() }}</p>
    <button (click)="takeStroke()" class="btn btn-sm btn-success btn-circle">
      +
    </button>
    <button (click)="removeStroke()" class="btn btn-sm btn-warning btn-circle">
      -
    </button>
  `,
  styles: ``,
})
export class GolfHoleComponent {
  score = signal(0);

  takeStroke() {
    this.score.update((s) => s + 1);
  }

  removeStroke() {
    this.score.update((s) => s - 1);
  }
}
