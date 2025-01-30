import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { ResourceListComponent } from './pages/resource-list.component';
export const RESOURCE_ROUTES: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: 'list',
        component: ResourceListComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
