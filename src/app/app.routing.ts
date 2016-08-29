import { Routes, RouterModule }   from '@angular/router';

import {
    loginRoutes,
    authProviders
}  from './login.routing';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
  }
];

const appRoutes: Routes = [
  ...loginRoutes,
  ...crisisCenterRoutes,
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }
];

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});