import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraMayusPipe } from './primera-mayus.pipe';
import { PruebaComponent } from './prueba/prueba.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraMayusPipe,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
