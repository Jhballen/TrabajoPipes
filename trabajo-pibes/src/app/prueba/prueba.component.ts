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

  constructor() { 
    this.pruebaMayus1 = "Implemente un pipe que permita poner";
    this.pruebaMayus2 = "Debería ayudar a despertar tu imaginación creativa, si estás buscando pensar un nombre de dominio, un nombre de agrupación musical, un nombre de proyecto o lo que sea.";
    
  }




  ngOnInit(): void {
  }

}
