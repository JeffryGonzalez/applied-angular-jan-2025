import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NewsItemEntity } from './resource.store';

export class ResourceDataService {
  #client = inject(HttpClient);

  getNewsItems() {
    return this.#client.get<NewsItemEntity[]>(
      'https://prod32.hypertheory.com/api/news',
    );
  }
}
