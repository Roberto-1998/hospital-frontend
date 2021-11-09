import { Routes, RouterModule, Router, CanActivate } from '@angular/router';
import {  NgModule} from "@angular/core";
import { AuthGuard } from '../guards/auth.guard';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes:Routes=[
    {
        path:'dashboard',
        component:PagesComponent,
        canActivate:[AuthGuard],
        children:[
          {path:'', component:DashboardComponent, data:{titulo: 'Dashboard'}},
          {path:'grafica1', component:Grafica1Component, data:{titulo: 'Gráficas'}},
          {path:'progress', component:ProgressComponent, data:{titulo: 'ProgressBar'}},
          {path:'promesas', component:PromesasComponent, data:{titulo: 'Promesas'}},
          {path:'account-settings', component:AccountSettingsComponent, data:{titulo: 'Ajustes de tema'}},
          {path:'rxjs', component:RxjsComponent, data:{titulo: 'Rxjs'}},
        ]
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class PagesRoutingModule {}
