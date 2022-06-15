import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AeropuertoComponent } from './pages/aeropuerto/aeropuerto.component';
import { MaterialModule } from './material/material.module';
import { AerolineaComponent } from './pages/aerolinea/aerolinea.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { HttpClientModule } from '@angular/common/http';
import { VuelosDiaComponent } from './pages/vuelos-dia/vuelos-dia.component';
import { ApiConsumerComponent } from './pages/api-consumer/api-consumer.component';
import { ApiConsumerNoResComponent } from './pages/api-consumer-no-res/api-consumer-no-res.component';
import { ApiConsumerMayorRComponent } from './pages/api-consumer-mayor-r/api-consumer-mayor-r.component';
import { ApiConsumerMenorVComponent } from './pages/api-consumer-menor-v/api-consumer-menor-v.component';
import { ApiConsumerAntiguaComponent } from './pages/api-consumer-antigua/api-consumer-antigua.component';
import { ApiConsumerActualComponent } from './pages/api-consumer-actual/api-consumer-actual.component';


@NgModule({
  declarations: [
    AppComponent,
    AeropuertoComponent,
    AerolineaComponent,
    VuelosComponent,
    VuelosDiaComponent,
    ApiConsumerComponent,
    ApiConsumerNoResComponent,
    ApiConsumerMayorRComponent,
    ApiConsumerMenorVComponent,
    ApiConsumerAntiguaComponent,
    ApiConsumerActualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
