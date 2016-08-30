import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmptyComponent } from '../shared/empty.component';
import { TestComponent } from '../shared/test.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: EmptyComponent,
      },
      {
        path: 'test',
        outlet: 'outlet_test',
        component: TestComponent
      },
    ]
  },
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);
