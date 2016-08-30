import { NgModule } from '@angular/core';
import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { WidgetContactsComponent } from './category/widget/widget-contacts.component';
import { WidgetHomeComponent } from './category/widget/widget-home.component';
import { WidgetComponent } from './category/widget/widget.component';
import { CategoryComponent } from './category/category.component';
import { DynamicCategoryOutletComponent } from './dynamic-category-outlet.component';
import { CategoryService } from './category/category.service';
import { WidgetService } from './category/widget/widget.service';
import { DynamicWidgetOutletComponent } from './category/dynamic-widget-outlet.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,

    CategoryComponent,

    WidgetComponent,
    WidgetHomeComponent,
    WidgetContactsComponent,

    DynamicCategoryOutletComponent,
    DynamicWidgetOutletComponent,
  ],
  providers: [
    CategoryService,
    WidgetService,
  ],

  entryComponents: [
    DashboardComponent,

    CategoryComponent,

    WidgetComponent,
    WidgetHomeComponent,
    WidgetContactsComponent,
  ]
})
export class DashboardModule {

  constructor() {
  }
}
