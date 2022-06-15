import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeropuertoComponent } from './pages/aeropuerto/aeropuerto.component';
import { AerolineaComponent } from './pages/aerolinea/aerolinea.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { VuelosDiaComponent } from './pages/vuelos-dia/vuelos-dia.component';
import { ApiConsumerComponent } from './pages/api-consumer/api-consumer.component';
import { ApiConsumerNoResComponent } from './pages/api-consumer-no-res/api-consumer-no-res.component';
import { ApiConsumerMayorRComponent } from './pages/api-consumer-mayor-r/api-consumer-mayor-r.component';
import { ApiConsumerMenorVComponent } from './pages/api-consumer-menor-v/api-consumer-menor-v.component';
import { ApiConsumerAntiguaComponent } from './pages/api-consumer-antigua/api-consumer-antigua.component';
import { ApiConsumerActualComponent } from './pages/api-consumer-actual/api-consumer-actual.component';

const routes: Routes = [
  { path: 'pages/aeropuerto', component: AeropuertoComponent },
  { path: 'pages/aerolinea', component: AerolineaComponent },
  { path: 'pages/vuelos', component: VuelosComponent },
  { path: 'pages/vuelos-dia', component: VuelosDiaComponent },
  { path: 'pages/api-consumer', component: ApiConsumerComponent },
  { path: 'pages/api-consumer-no-res', component: ApiConsumerNoResComponent },
  { path: 'pages/api-consumer-mayor-r', component: ApiConsumerMayorRComponent },
  { path: 'pages/api-consumer-menor-v', component: ApiConsumerMenorVComponent },
  { path: 'pages/api-consumer-antigua', component: ApiConsumerAntiguaComponent },
  { path: 'pages/api-consumer-actual', component: ApiConsumerActualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
