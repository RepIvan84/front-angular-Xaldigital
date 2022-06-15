import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vuelo } from 'src/app/_model/vuelos';
import { VuelosService } from '../../_service/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  displayedColumns: string[] = ['idAerolinea', 'nombreAerolinea', 'dia', 'numVuelos'];
  dataSource: MatTableDataSource<Vuelo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.listarAerolineasConDosVuelos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
