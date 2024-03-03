import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, format: string = 'DD MMM YYYY'): unknown {
    return moment(value,'YYYY-MM-DD').format(format).toString();
  }

}