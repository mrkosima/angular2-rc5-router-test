import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmptyComponent } from './empty.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: EmptyComponent,
      }
    ]
  },
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);
