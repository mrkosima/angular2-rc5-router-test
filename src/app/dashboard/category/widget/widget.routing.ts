import { Routes } from '@angular/router';
import { WidgetHomeComponent } from './widget-home.component';
import { WidgetContactsComponent } from './widget-contacts.component';

export const widgetRoutes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: WidgetHomeComponent},
  {path: 'contacts', component: WidgetContactsComponent},
];