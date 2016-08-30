import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BadgeComponent } from './badge.component';
import { BadgeMainComponent } from './badge-main.component';
import { BadgeInfoComponent } from './badge-info.component';
import { badgeRouting } from './badge.routing';

@NgModule({
  imports: [SharedModule, badgeRouting],
  declarations: [BadgeComponent, BadgeMainComponent, BadgeInfoComponent],
  providers: []
})

export default class BadgeModule {

}