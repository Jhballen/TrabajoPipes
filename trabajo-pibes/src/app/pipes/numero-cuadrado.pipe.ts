import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroCuadrado'
})
export class NumeroCuadradoPipe implements PipeTransform {

  transform(number: number): number {
    return number*number;
  }

}
