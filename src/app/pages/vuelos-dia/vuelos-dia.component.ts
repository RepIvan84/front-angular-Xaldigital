import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dia } from 'src/app/_model/Dia';
import { VuelosService } from 'src/app/_service/vuelos.service';

@Component({
  selector: 'app-vuelos-dia',
  templateUrl: './vuelos-dia.component.html',
  styleUrls: ['./vuelos-dia.component.css']
})
export class VuelosDiaComponent implements OnInit {

  displayedColumns: string[] = ['dia'];
  dataSource: MatTableDataSource<Dia>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.DiaConMasVuelos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
