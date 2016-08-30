import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { badgeGroupRouting } from './badge-group.routing';
import { BadgeGroupComponent } from './badge-group.component';

@NgModule({
  imports: [
    SharedModule,
    badgeGroupRouting
  ],
  declarations: [
    BadgeGroupComponent,
  ],
  entryComponents: [
    BadgeGroupComponent
  ]
})

export default class BadgeGrouoModule {

}