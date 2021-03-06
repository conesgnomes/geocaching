import { Injectable } from '@angular/core';
import { Cache } from './cache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaveCacheService {
  caches: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.caches = af.list('caches');
  }
  addCache(newCache: Cache) {
    this.caches.push(newCache);
  }
  getCaches() {
    return this.caches;
  }
  deleteCache(selectedCache) {
    let foundCache = this.getCacheById(selectedCache.$key);
    foundCache.remove();
  }
  getCacheById(cacheId: string) {
    return this.af.object('caches/' + cacheId);
  }

}
