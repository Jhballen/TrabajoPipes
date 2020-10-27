import { Pipe, PipeTransform } from '@angular/core';
import { constants } from 'buffer';

@Pipe({
  name: 'mayusAlter'
})
export class MayusAlterPipe implements PipeTransform {
  textoAlternado: string;
  i: number;

  transform(entrada: string): string {
    
    this.textoAlternado = "";
    
    for (this.i=0; this.i< entrada.length; this.i++) {
        
      if (entrada.charAt(this.i)!=' ') {
      this.textoAlternado = this.textoAlternado+entrada.charAt(this.i).toUpperCase();
      
      if (entrada.charAt(this.i+1) == ' ') {
        this.textoAlternado = this.textoAlternado+" ";
        this.i++;
      }
      this.textoAlternado = this.textoAlternado+entrada.charAt(this.i+1).toLocaleLowerCase();
      this.i++;
    } else { 
      this.textoAlternado = this.textoAlternado+" ";}
    }
    
    return this.textoAlternado;
  }

}
