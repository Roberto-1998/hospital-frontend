import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule  } from "@angular/router";
import { FormsModule } from '@angular/forms';


import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    
  ],
  exports:[
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
