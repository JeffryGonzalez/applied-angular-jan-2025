import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation.component';
import { FeatureDirective } from '@shared';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation />
    <a class="link" *feature="'golf'" routerLink="/golf">Golf EXTRA</a>
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavigationComponent, RouterOutlet, FeatureDirective, RouterLink],
})
export class AppComponent {}
