import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HeroesModule } from './heroes/heroes.module';
import { LoginComponent } from './login.component';
import { DialogService } from './dialog.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { BadgeDashboardModule } from './badge-dashboard/badge-dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SharedModule,

    HeroesModule,
    DashboardModule,
    BadgeDashboardModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */