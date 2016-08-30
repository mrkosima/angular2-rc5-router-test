import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BadgeService } from '../badge.service';
import { BaseBadgeContainerComponent } from '../base/base-badge-container.component';

@Component({
  moduleId: module.id,
  selector: 'badge-group',
  templateUrl: 'badge-group.component.html'
})
export class BadgeGroupComponent extends BaseBadgeContainerComponent implements OnInit {

  public id: number;

  public outlets: any[] = [];
  public loading: boolean = false;

  constructor(
      private badgeService: BadgeService,
      router: Router,
      activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { id: number }) => {
      this.id = data.id;
    });
  }

  addBadge() {
    this.addComponent(this.badgeService.getNextBadge());
  }
}
