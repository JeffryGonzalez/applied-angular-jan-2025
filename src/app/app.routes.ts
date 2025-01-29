import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'demos',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },

  {
    path: 'golf',
    data: {
      preload: true,
    },
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  {
    path: 'jeff-counter',
    loadChildren: () =>
      import('./jeff-counter/counter.routes').then(
        (r) => r.JEFF_COUNTER_ROUTES,
      ),
  },
];
