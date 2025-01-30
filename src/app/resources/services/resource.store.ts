import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { addEntity, setEntities, withEntities } from '@ngrx/signals/entities';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { ResourceDataService } from './resource.data';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { mergeMap, pipe, switchMap, tap } from 'rxjs';

export type NewsItemEntity = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type NewsItemCreateModel = Omit<NewsItemEntity, 'id'>;
export const ResourceStore = signalStore(
  withEntities<NewsItemEntity>(),
  withDevtools('resource-store'),
  withComputed((store) => {
    return {
      newsItems: computed(() => store.entities()),
      newsItemCount: computed(() => store.entities().length),
    };
  }),
  withMethods((store) => {
    const service = inject(ResourceDataService);
    return {
      addNewsItem: rxMethod<NewsItemCreateModel>(
        pipe(
          mergeMap((item) =>
            service
              .addNewsResource(item)
              .pipe(tap((r) => patchState(store, addEntity(r)))),
          ),
        ),
      ),
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            service
              .getNewsItems()
              .pipe(tap((r) => patchState(store, setEntities(r)))),
          ),
        ),
      ),
    };
  }),

  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
