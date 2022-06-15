import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { VuelosService } from '../../_service/vuelos.service';
import { Aerolinea } from '../../_model/Aerolinea';

@Component({
  selector: 'app-aerolinea',
  templateUrl: './aerolinea.component.html',
  styleUrls: ['./aerolinea.component.css']
})
export class AerolineaComponent implements OnInit {

  displayedColumns: string[] = ['idAerolinea', 'nombreAerolinea'];
  dataSource: MatTableDataSource<Aerolinea>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.listarAerolineaConMasVuelos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
