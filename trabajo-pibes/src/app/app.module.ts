import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraMayusPipe } from './pipes/primera-mayus.pipe';
import { PruebaComponent } from './prueba/prueba.component';

import { FormsModule } from '@angular/forms';
import { FechaConexionPipe } from './pipes/fecha-conexion.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { NumeroCuadradoPipe } from './pipes/numero-cuadrado.pipe';
import { MayusAlterPipe } from './pipes/mayus-alter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraMayusPipe,
    PruebaComponent,
    FechaConexionPipe,
    NumeroCuadradoPipe,
    MayusAlterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
