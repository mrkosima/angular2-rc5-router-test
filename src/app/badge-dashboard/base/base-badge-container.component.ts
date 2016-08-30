import { OnDestroy } from '@angular/core';
import { BadgeModuleInterface } from '../badge.service';
import { Router, ActivatedRoute, UrlTree, Route } from '@angular/router';
import { IdResolve } from '../id.resolve';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
export abstract class BaseBadgeContainerComponent implements OnDestroy {

  public outlets: any[] = [];
  public loading: boolean = false;

  constructor(
      protected router: Router,
      protected activatedRoute: ActivatedRoute) {
  }

  addOutlet(name: string, styleClass: string): Observable<boolean> {
    this.outlets.push({name, styleClass});
    return Observable.of(true).delay(500);
  }

  addRouting(path: string, outletName: string, loadChildrenPath: string) {
    let route: Route = {
      path: path,
      outlet: outletName,
      resolve: {id: IdResolve},
      loadChildren: loadChildrenPath
    };
    if (!this.activatedRoute.routeConfig.children) {
      this.activatedRoute.routeConfig.children = [];
    }
    this.activatedRoute.routeConfig.children.push(route);
  }

  navigate(path: string, outletName: string) {
    let outlets = {};
    outlets[outletName] = path;
    let urlTree: UrlTree = this.router.createUrlTree([{outlets: outlets}],
        {relativeTo: this.activatedRoute});
    console.warn('navigate to ', this.router.serializeUrl(urlTree));
    this.router.navigateByUrl(urlTree, {});

  }

  addComponent(moduleResult: Observable<BadgeModuleInterface>) {
    this.loading = true;
    let subscription: Subscription = moduleResult
        .subscribe((result: BadgeModuleInterface) => {
          this.loading = false;
          let outletName: string = `${result.key}_${result.id}`;
          if (this.outlets.some(outlet => outlet.name === outletName)) {
            console.warn(`${outletName} already added`);
            return;
          }
          subscription.unsubscribe();
          this.addOutlet(outletName, result.key).subscribe(
              () => {
                let path: string = `${result.id}`;
                this.addRouting(path, outletName, result.modulePath);
                this.navigate(path, outletName);
              }
          );
        });
  }

  ngOnDestroy() {
    this.activatedRoute.routeConfig.children = [];
  }
}
