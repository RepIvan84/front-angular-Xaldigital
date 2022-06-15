import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../_service/api-service.service';
import { Consumer } from '../../_model/Consumer';

@Component({
  selector: 'app-api-consumer',
  templateUrl: './api-consumer.component.html',
  styleUrls: ['./api-consumer.component.css']
})
export class ApiConsumerComponent implements OnInit {

  displayedColumns: string[] = ['link', 'title', 'is_answered', 'view_count', 'creation_date'];
  dataSource: MatTableDataSource<Consumer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceConsumer: ApiServiceService) { }

  ngOnInit(): void {
    this.serviceConsumer.listarRespuestasContestadas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
