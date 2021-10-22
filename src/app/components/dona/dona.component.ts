import { Component, Input} from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo:string='Gráfica'; 
  @Input() labels:Label[]=['Label1', 'Label2', 'Label3']; 
  @Input() data:MultiDataSet=[[300,200, 500]]; 
  
 

  public colors:Color[]=[
    {backgroundColor:['#6857E6', '#009FEE', '#F02059']}
  ]

}
