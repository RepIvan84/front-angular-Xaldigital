import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Vuelo } from '../_model/vuelos';
import { Aeropuerto } from '../_model/Aeropuerto';
import { Aerolinea } from '../_model/Aerolinea';
import { Dia } from '../_model/Dia';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private url1: string = `${environment.HOST}/vuelos/sql/1`;
  private url2: string = `${environment.HOST}/vuelos/sql/2`;
  private url3: string = `${environment.HOST}/vuelos/sql/3`;
  private url4: string = `${environment.HOST}/vuelos/sql/4`;


  constructor(private http: HttpClient) { }

  listarAeropuertoConMayorMov() {
    return this.http.get<Aeropuerto[]>(this.url1);
  }

  listarAerolineaConMasVuelos() {
    return this.http.get<Aerolinea[]>(this.url2);
  }

  DiaConMasVuelos() {
    return this.http.get<Dia[]>(this.url3);
  }

  listarAerolineasConDosVuelos() {
    return this.http.get<Vuelo[]>(this.url4);
  }
}
