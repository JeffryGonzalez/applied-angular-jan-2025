import { Routes } from '@angular/router';
import { GolfComponent } from './golf.component';
export const GOLF_ROUTES: Routes = [
  {
    path: '',
    component: GolfComponent,
    children: [],
  },
];
