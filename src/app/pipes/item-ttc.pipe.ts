import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceItem } from '../models/invoice.model';

@Pipe({
  name: 'itemTtc'
})
export class ItemTtcPipe implements PipeTransform {

  transform(value: InvoiceItem, ...args: unknown[]): unknown {
    return ((value.ItemPrice + value.ItemTax) * value.ItemQuantity).toFixed(2);
  }

}
