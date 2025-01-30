import {
  ChangeDetectionStrategy,
  Component,
  ResourceStatus,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResourceStore } from './services/resource.store';

@Component({
  selector: 'app-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ResourceStore],
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>
      <h2 class="text-2xl text-accent">Resources</h2>
    </div>

    <div class="flex flex-col">
      <div>
        <a class="btn btn-sm btn-primary" routerLink="list">List</a>
        <a class="btn btn-sm btn-primary" routerLink="create">Add</a>
      </div>
      <div><router-outlet /></div>
    </div>
  `,
  styles: ``,
})
export class ResourcesComponent {
  //totalNewsItems = computed(() => this.newsItems.value().length);
}
