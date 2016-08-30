import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BadgeService } from './badge.service';
import { BaseBadgeContainerComponent } from './base/base-badge-container.component';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'badge-dashboard.component.html',
  styleUrls: ['badge-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeDashboardComponent extends BaseBadgeContainerComponent {

  public outlets: any[] = [];
  public loading: boolean = false;

  constructor(
      private badgeService: BadgeService,
      router: Router,
      activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }

  debugMe() {
    debugger;
  }

  addBadge() {
    this.addComponent(this.badgeService.getNextBadge());
  }

  addBadgeGroup() {
    this.addComponent(this.badgeService.getNextBadgeGroup());
  }
}
