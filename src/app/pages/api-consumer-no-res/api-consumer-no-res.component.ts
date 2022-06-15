import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Consumer } from 'src/app/_model/Consumer';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-api-consumer-no-res',
  templateUrl: './api-consumer-no-res.component.html',
  styleUrls: ['./api-consumer-no-res.component.css']
})
export class ApiConsumerNoResComponent implements OnInit {

  displayedColumns: string[] = ['link', 'title', 'is_answered', 'view_count', 'creation_date'];
  dataSource: MatTableDataSource<Consumer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceConsumer: ApiServiceService) { }

  ngOnInit(): void {
    this.serviceConsumer.listarRespuestasNoContestadas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }
}