import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationSearchComponent } from './location-search/location-search.component';
import { UserCacheListComponent } from './user-cache-list/user-cache-list.component';
import { CacheDetailComponent } from './cache-detail/cache-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LocationSearchComponent
  },
  {
    path: 'user/caches',
    component: UserCacheListComponent
  },
  {
    path: 'caches/:id',
    component: CacheDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
