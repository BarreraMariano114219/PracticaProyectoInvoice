import { Component, Input } from '@angular/core';

@Component({
  selector: 'total',
  imports: [],
  templateUrl: './total.component.html'
})
export class TotalComponent {

@Input() total!:number;

}
