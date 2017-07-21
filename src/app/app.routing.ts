import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationSearchComponent } from './location-search/location-search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LocationSearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
