import { Routes, RouterModule } from '@angular/router';
import { BadgeMainComponent } from './badge-main.component';
import { BadgeInfoComponent } from './badge-info.component';
import { ModuleWithProviders } from '@angular/core';
import { BadgeComponent } from './badge.component';

const badgeRoutes: Routes = [
  {
    path: '',
    component: BadgeComponent,
    children: [
      {path: '', redirectTo: 'main'},
      {path: 'main', component: BadgeMainComponent},
      {path: 'info', component: BadgeInfoComponent},
    ]
  }
];

export const badgeRouting: ModuleWithProviders = RouterModule.forChild(badgeRoutes);
