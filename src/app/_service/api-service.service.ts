import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consumer } from '../_model/Consumer';
import { Owner } from '../_model/Owner';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url1: string = `${environment.HOST}/Api/respondidos`;
  private url2: string = `${environment.HOST}/Api/NoRespondidos`;
  private url3: string = `${environment.HOST}/Api/mayorReputacion`;
  private url4: string = `${environment.HOST}/Api/menorNumeroVisitas`;
  private url5: string = `${environment.HOST}/Api/respuestaMasAntigua`;
  private url6: string = `${environment.HOST}/Api/respuestaMasActual`;


  constructor(private http: HttpClient) { }

  listarRespuestasContestadas() {
    return this.http.get<Consumer[]>(this.url1);
  }

  listarRespuestasNoContestadas() {
    return this.http.get<Consumer[]>(this.url2);
  }

  respuestaMayorReputacion() {
    return this.http.get<Owner[]>(this.url3);
  }

  respuestaMenorNumeroVistas() {
    return this.http.get<Consumer[]>(this.url4);
  }

  respuestaMasAntigua() {
    return this.http.get<Consumer[]>(this.url5);
  }

  respuestaMasActual() {
    return this.http.get<Consumer[]>(this.url6);
  }


}
