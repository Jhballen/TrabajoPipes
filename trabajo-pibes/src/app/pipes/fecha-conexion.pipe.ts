import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaConexion'
})
export class FechaConexionPipe implements PipeTransform {

  transform(date: Date): string {
   
   const fechaActual = new Date();

   const text = fechaActual.toString();

   if (fechaActual.getTime() - date.getTime()   <= 	3600000) {
     return "conectado hace pocos minutos";
   } else if (fechaActual.getTime() - date.getTime()   <= 3600000*6	) {
    return "conectado hace pocas horas";
   } else if (fechaActual.getTime() - date.getTime()   <= 3600000*12) {
    return "conectado hace menos de 12 horas";
   } else if (fechaActual.getTime() - date.getTime()   <= 3600000*24) {
    return "conectado hace menos de 24 horas";
   } else if ((fechaActual.getTime() - date.getTime()   >= 3600000*24) && (fechaActual.getMonth()-date.getMonth() == 0)) {
    return "Conectado este mes";
   } else if ((fechaActual.getTime() - date.getTime()   >= 3600000*24) && (fechaActual.getMonth()-date.getMonth() == 1)) {
    return "Conectado el mes pasado";
   } else if (fechaActual.getTime() - date.getTime()   <= 3600000*1440) {
    return "Conectado este año";
   }


    return text;


    
  }

}
