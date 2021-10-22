import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css' ]
})
export class ProgressComponent  {

  progreso1:number=60;
  progreso2:number=35;
 
  obtenerProgreso(valor:number){
    return `${valor}%`;
  }

}
