import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface BadgeModuleInterface {
  id: number;
  key: string;
  modulePath: string;
}

@Injectable()
export class BadgeService {

  getNextBadge(): Observable<BadgeModuleInterface> {
    return Observable.of(1000 + Math.round(Math.random() * 1000)).delay(100)
        .map((id: number): BadgeModuleInterface =>
            <BadgeModuleInterface> {
              id,
              key: 'badge',
              modulePath: 'app/badge-dashboard/badge/badge.module'
            });
  }

  getNextBadgeGroup(): Observable<BadgeModuleInterface> {
    return Observable.of(100 + Math.round(Math.random() * 100)).delay(100)
        .map((id: number): BadgeModuleInterface =>
            <BadgeModuleInterface> {
              id,
              key: 'badgeGroup',
              modulePath: 'app/badge-dashboard/badge-group/badge-group.module'
            });
  }

}
