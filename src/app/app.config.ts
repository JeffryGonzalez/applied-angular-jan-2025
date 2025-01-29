import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { CustomPreloadingStrategy } from '@shared';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomPreloadingStrategy,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
  ],
};
