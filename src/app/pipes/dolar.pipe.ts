import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dolar'})
export class DolarPipe implements PipeTransform {
  transform(value: number): String {
    let val = value / 27.5;
    return val.toFixed(2) + ' U$S';
  }
}
