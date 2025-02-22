import {
  Component,
  ChangeDetectionStrategy,
  resource,
  inject,
} from '@angular/core';
import { ResourceStore } from '../services/resource.store';

@Component({
  selector: 'app-resource-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div role="alert" class="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Loading your news! It'll be worth it!</span>
    </div>

    <div class="flex flex-col gap-8">
      @for (item of store.newsItems(); track item.id) {
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            @if (item.pending) {
              <div class="alert alert-info">
                <p>This is still pending. Chill</p>
              </div>
            }
            <p>{{ item.description }}</p>
            <div class="card-actions justify-end">
              <a
                href="{{ item.link }}"
                target="_blank"
                class="btn btn-primary"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class ResourceListComponent {
  // with the resource data

  store = inject(ResourceStore);

  constructor() {}
}
