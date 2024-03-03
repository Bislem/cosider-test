import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceItem } from '../models/invoice.model';

@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: InvoiceItem[], ...args: unknown[]): unknown {
    let tva = 0;
    for (let item of value) {
      tva += (item.ItemTax * item.ItemQuantity);
    }
    return tva;
  }

}
