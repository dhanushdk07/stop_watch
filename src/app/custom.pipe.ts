import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number') {
      throw new Error('Input to formatNumber pipe must be a number');
    }
    return value < 10 ? `0${value}` : `${value}`;
  }
}
