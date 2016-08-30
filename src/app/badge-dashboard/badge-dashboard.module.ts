import { NgModule } from '@angular/core';
import { BadgeService } from './badge.service';
import { BadgeDashboardComponent } from './badge-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { badgeDashboardRouting } from './badge-dashboard.routing';
import { IdResolve } from './id.resolve';
import { LazyProblemsComponent } from './lazy-problems.component';

@NgModule({
  imports: [
    SharedModule,
    badgeDashboardRouting
  ],
  declarations: [
    BadgeDashboardComponent,
    LazyProblemsComponent
  ],
  providers: [BadgeService, IdResolve],
  entryComponents: [
    BadgeDashboardComponent
  ]
})

export class BadgeDashboardModule {

}