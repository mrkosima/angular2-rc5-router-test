import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
export class IdResolve implements Resolve<number> {

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return route.url.map((segment: UrlSegment) => segment.path).join('/');
  }
}