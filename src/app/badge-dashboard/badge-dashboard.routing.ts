import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BadgeDashboardComponent } from './badge-dashboard.component';

const badgeDashboardRoutes: Routes = [
  {
    path: 'badges',
    component: BadgeDashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'badges',
  },
];

export const badgeDashboardRouting: ModuleWithProviders =
    RouterModule.forChild(badgeDashboardRoutes);