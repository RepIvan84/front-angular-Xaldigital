import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Aeropuerto } from 'src/app/_model/Aeropuerto';
import { VuelosService } from 'src/app/_service/vuelos.service';

@Component({
  selector: 'app-aeropuerto',
  templateUrl: './aeropuerto.component.html',
  styleUrls: ['./aeropuerto.component.css']
})
export class AeropuertoComponent implements OnInit {

  displayedColumns: string[] = ['idAeropuerto', 'nombreAeropuerto'];
  dataSource: MatTableDataSource<Aeropuerto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.listarAeropuertoConMayorMov().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
