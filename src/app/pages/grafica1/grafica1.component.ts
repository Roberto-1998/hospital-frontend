import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labels1: string[] = ['Hola1', 'Hola2', 'Hola3'];
  public labels2: string[] = ['Hola4', 'Hola5', 'Hola6'];
  public labels3: string[] = ['Hola7', 'Hola8', 'Hola9'];
  public labels4: string[] = ['Hola10', 'Hola11', 'Hola12'];

  public data1= [[100, 200, 700]];
  public data2= [[200, 300, 500]];
  public data3= [[300, 400, 300]];
  public data4= [[400, 500, 100]];
  

}
