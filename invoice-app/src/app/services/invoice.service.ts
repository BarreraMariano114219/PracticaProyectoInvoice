import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice : Invoice = invoiceData;

  constructor() { }

  getInvoice() : Invoice {
    const total = this.calculateTotal();
    return {... this.invoice,total:total};
  }

  calculateTotal() : number {
    let total = 0;
    this.invoice.items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  deleteItem(id:number) : void {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
  }

  addItem(item:Item) : void {
    this.invoice.items = [...this.invoice.items,item];
  }
}
