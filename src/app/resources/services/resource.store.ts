import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
export type NewsItemEntity = {
  id: string;
  title: string;
  description: string;
  link: string;
};
export const ResourceStore = signalStore(
  withEntities<NewsItemEntity>(),
  withDevtools('resource-store'),
  withComputed((store) => {
    return {
      newsItems: computed(() => store.entities()),
    };
  }),

  withHooks({
    onInit(store) {
      const fakeNewsItems = [
        {
          id: '1',
          title: 'Ngrx Site',
          description: 'Signal store, store, effects, all that',
          link: 'https://ngrx.io',
        },
        {
          id: '2',
          title: 'Hypertheory Applied Angular',
          description: 'The official Angular Site',
          link: 'https://applied-angular.hypertheory.com',
        },
        {
          id: '3',
          title: 'Mock Service Workers',
          description: 'Tool for Intercepting and Faking Http Calls',
          link: 'https://mswjs.io',
        },
      ];
      patchState(store, setEntities(fakeNewsItems));
    },
  }),
);
