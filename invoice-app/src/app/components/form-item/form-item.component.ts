import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {


  @Output() addItemEventEmitter: EventEmitter<Item> = new EventEmitter();

  private counterId : number = 5;

 item : any = {
  product: '',
  price: '',
  quantity: ''
 }

  addItem(itemForm:NgForm):void {
    if(itemForm.valid) {
      this.addItemEventEmitter.emit({id:this.counterId++,...this.item});
      this.item = {
        product: '',
        price: '',
        quantity: ''
      };
      itemForm.resetForm();

    }
  
  }

}
