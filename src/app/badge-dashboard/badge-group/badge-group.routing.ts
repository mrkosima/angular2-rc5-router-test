import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BadgeGroupComponent } from './badge-group.component';

const badgeGrouoRoutes: Routes = [
  {
    path: '',
    component: BadgeGroupComponent,
  },
];

export const badgeGroupRouting: ModuleWithProviders =
    RouterModule.forChild(badgeGrouoRoutes);