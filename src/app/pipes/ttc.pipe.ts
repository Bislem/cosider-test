import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceItem } from '../models/invoice.model';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {

  transform(value: InvoiceItem[], ...args: unknown[]): unknown {
    let ttc = 0;
    for (let item of value) {
      ttc += ((item.ItemPrice + item.ItemTax) * item.ItemQuantity);
    }
    return ttc;
  }

}
