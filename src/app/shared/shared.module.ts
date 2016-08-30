import { NgModule } from '@angular/core';
import { ComponentOutlet } from 'angular2-component-outlet';
import { EmptyComponent } from './empty.component';
import { DynamicRouterOutletComponent } from './dynamic-router-outlet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutletComponent } from './router-outlet.component';
import { TestComponent } from './test.component';

@NgModule({
  imports: [],
  declarations: [
    ComponentOutlet,
    EmptyComponent,
    TestComponent,
    RouterOutletComponent,
    DynamicRouterOutletComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ComponentOutlet,
    EmptyComponent,
    TestComponent,
    RouterOutletComponent,
    DynamicRouterOutletComponent
  ]
})

export class SharedModule {

}