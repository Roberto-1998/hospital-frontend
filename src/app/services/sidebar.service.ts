import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Dashboard', url:'/'},
        {titulo:'Gráficas', url:'grafica1'},
        {titulo:'Rxjs', url:'rxjs'},
        {titulo:'ProgressBar', url:'progress'},
        {titulo:'Promesas', url:'promesas'},
      ]
    }
  ]

  constructor() { }
}
