import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayus'
})
export class PrimeraMayusPipe implements PipeTransform {
  mayusFinal: string;

  transform(entrada: string): string {
    
    const primeraMayus = entrada.split(" ");
    this.mayusFinal = "";
    
    primeraMayus.forEach(element => {
      this.mayusFinal = this.mayusFinal+element.charAt(0).toUpperCase()+element.slice(1, element.length)+" ";
    });
    
    
    
    return this.mayusFinal;
  }

}
