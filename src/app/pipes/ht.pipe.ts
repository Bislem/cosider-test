import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceItem } from '../models/invoice.model';

@Pipe({
  name: 'ht'
})
export class HtPipe implements PipeTransform {

  transform(value: InvoiceItem[], ...args: unknown[]): unknown {
    let ht = 0;
    for (let item of value) {
      ht += (item.ItemPrice * item.ItemQuantity);
    }
    return ht;  }

}
