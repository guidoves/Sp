import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'megabyte'})
export class MegaPipe implements PipeTransform {
  transform(value: number): String {
    return value + ' MB';
  }
}
