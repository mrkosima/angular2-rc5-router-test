import { Component } from '@angular/core';
import { Router, ActivatedRoute, UrlTree, Route } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { categoryChildrenRoutes } from './category/category.routing';
import { CategoryService } from './category/category.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  public outlets: string[] = [];
  public loading: boolean = false;

  constructor(
      private categoryService: CategoryService, private router: Router,
      private activatedRoute: ActivatedRoute) {
  }

  debugMe() {
    debugger;
  }

  addOutlet(categoryId: number): Observable<boolean> {
    this.outlets.push(`category${categoryId}`);
    return Observable.of(true).delay(500);
  }

  addRouting(categoryId: number) {
    let route: Route = {
      path: `${categoryId}`,
      outlet: `category${categoryId}`,
      component: CategoryComponent,
      children: categoryChildrenRoutes
    };
    this.activatedRoute.routeConfig.children.push(route);
  }

  navigate(categoryId: number) {
    let outlets = {};
    outlets['category' + categoryId] = categoryId.toString();
    let urlTree: UrlTree = this.router.createUrlTree([{outlets: outlets}],
        {relativeTo: this.activatedRoute});
    console.warn('navigate to ', this.router.serializeUrl(urlTree));
    this.router.navigateByUrl(urlTree);

  }

  addCategory() {
    this.loading = true;
    let subscription: Subscription = this.categoryService.getNextCategory()
        .subscribe(categoryId => {
          this.loading = false;
          if (this.outlets.indexOf(categoryId.toString()) >= 0) {
            console.warn(`Category ${categoryId} already added`);
            return;
          }
          subscription.unsubscribe();
          this.addOutlet(categoryId).subscribe(
              () => {
                this.addRouting(categoryId);
                this.navigate(categoryId);
              }
          );
        });
  }
}
