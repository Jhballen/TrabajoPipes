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

  numeroCuadrado1: number;
  numeroCuadrado2: number;
  inputNumber: number;
  constructor() { 
    this.pruebaMayus1 = "Implemente un pipe que permita poner";
    this.pruebaMayus2 = "Debería ayudar a despertar tu imaginación creativa, si estás buscando pensar un nombre de dominio, un nombre de agrupación musical, un nombre de proyecto o lo que sea.";
    this.fechaConexion1 = new Date(2020, 8, 30,10,40);
    this.fechaConexion2 = new Date(2020, 9, 27,9,52);
    this.numeroCuadrado1 = 5;
    this.numeroCuadrado2 = 3;
  }




  ngOnInit(): void {
  }

}
