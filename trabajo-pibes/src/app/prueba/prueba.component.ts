import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  pruebaMayus1: string;
  pruebaMayus2: string;
  inputMayus2: string;

  fechaConexion1: Date;
  fechaConexion2: Date;
  fechaConexion3: Date;
  fechaConexion4: Date;
  fechaConexion5: Date;
  fechaConexion6: Date;
  fechaConexion7: Date;
  fechaConexion8: Date;
  fechaConexion9: Date;
  fechaConexion10: Date;
  fechaConexion11: Date;
  fechaConexion12: Date;
  fechaConexion13: Date;
  fechaConexion14: Date;

  numeroCuadrado1: number;
  numeroCuadrado2: number;
  inputNumber: number;

  textoAlternado1: string;
  textoAlternado2: string;
  inputTexto: string;

  constructor() { 
    this.pruebaMayus1 = "Implemente un pipe que permita poner";
    this.pruebaMayus2 = "Debería ayudar a despertar tu imaginación creativa, si estás buscando pensar un nombre de dominio, un nombre de agrupación musical, un nombre de proyecto o lo que sea.";
    
    this.fechaConexion1 = new Date(2020, 9, 27,12,0);
    this.fechaConexion2 = new Date(2020, 9, 27,11,45);
    this.fechaConexion3 = new Date(2020, 9, 27,8,10);
    this.fechaConexion4 = new Date(2020, 9, 27,7,52);
    this.fechaConexion5 = new Date(2020, 9, 27,1,40);
    this.fechaConexion6 = new Date(2020, 9, 27,3,10);
    this.fechaConexion7 = new Date(2020, 9, 26,14,15);
    this.fechaConexion8 = new Date(2020, 9, 26,20,30);
    this.fechaConexion9 = new Date(2020, 9, 15,10,40);
    this.fechaConexion10 = new Date(2020, 8, 15,4,52);
    this.fechaConexion11= new Date(2020, 8, 30,20,40);
    this.fechaConexion12= new Date(2020, 8, 1,9,52);
    this.fechaConexion13 = new Date(2020, 7, 26,10,40);
    this.fechaConexion14 = new Date(2020, 1, 27,9,52);
    
    this.numeroCuadrado1 = 5;
    this.numeroCuadrado2 = 3;
    this.textoAlternado1 = "Hola Como estas"
    this.textoAlternado2 = "Debería ayudar a despertar tu imaginación creativa, si estás buscando pensar un nombre de dominio, un nombre de agrupación musical, un nombre de proyecto o lo que sea."
  }




  ngOnInit(): void {
  }

}
