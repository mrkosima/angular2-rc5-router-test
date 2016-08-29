import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentOutlet } from 'angular2-component-outlet';
import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { EmptyComponent } from './empty.component';
import { WidgetContactsComponent } from './category/widget/widget-contacts.component';
import { WidgetHomeComponent } from './category/widget/widget-home.component';
import { WidgetComponent } from './category/widget/widget.component';
import { CategoryComponent } from './category/category.component';
import { DynamicCategoryOutletComponent } from './dynamic-category-outlet.component';
import { CategoryService } from './category/category.service';
import { WidgetService } from './category/widget/widget.service';
import { DynamicWidgetOutletComponent } from './category/dynamic-widget-outlet.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    EmptyComponent,

    CategoryComponent,

    WidgetComponent,
    WidgetHomeComponent,
    WidgetContactsComponent,

    DynamicCategoryOutletComponent,
    DynamicWidgetOutletComponent,
    ComponentOutlet,

  ],
  providers: [
    CategoryService,
    WidgetService,
  ],

  entryComponents:[
    DashboardComponent,
    EmptyComponent,

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
