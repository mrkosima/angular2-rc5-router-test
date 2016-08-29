import { Component } from '@angular/core';
import { WidgetService } from './widget/widget.service';
import { Router, ActivatedRoute, Route, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { widgetRoutes } from './widget/widget.routing';
import { WidgetComponent } from './widget/widget.component';

@Component({
  moduleId: module.id,
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent {

  public outlets: string[] = [];
  public loading: boolean = false;

  constructor(
      private widgetService: WidgetService, private router: Router,
      private activatedRoute: ActivatedRoute) {
  }

  addOutlet(categoryId: number): Observable<boolean> {
    this.outlets.push(`widget${categoryId}`);
    return Observable.of(true).delay(500);
  }

  addRouting(categoryId: number) {
    let route: Route = {
      path: `${categoryId}`,
      outlet: `widget${categoryId}`,
      component: WidgetComponent,
      children: widgetRoutes
    };
    this.activatedRoute.routeConfig.children.push(route);
  }

  navigate(categoryId: number) {
    let outlets = {};
    outlets['widget' + categoryId] = categoryId.toString();
    let urlTree: UrlTree = this.router.createUrlTree([{outlets: outlets}],
        {relativeTo: this.activatedRoute});
    console.warn('navigate to ', this.router.serializeUrl(urlTree));
    this.router.navigateByUrl(urlTree);

  }

  addWidget() {
    this.loading = true;
    let subscription: Subscription = this.widgetService.getNextWidget()
        .subscribe(widgetId => {
          this.loading = false;
          if (this.outlets.indexOf(widgetId.toString()) >= 0) {
            console.warn(`Widget ${widgetId} already added`);
            return;
          }
          subscription.unsubscribe();
          this.addOutlet(widgetId).subscribe(
              () => {
                this.addRouting(widgetId);
                this.navigate(widgetId);
              }
          );
        });
  }
}
