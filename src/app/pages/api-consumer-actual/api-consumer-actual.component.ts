import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Consumer } from 'src/app/_model/Consumer';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-api-consumer-actual',
  templateUrl: './api-consumer-actual.component.html',
  styleUrls: ['./api-consumer-actual.component.css']
})
export class ApiConsumerActualComponent implements OnInit {

  displayedColumns: string[] = ['link', 'title', 'is_answered', 'view_count', 'creation_date'];
  dataSource: MatTableDataSource<Consumer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceConsumer: ApiServiceService) { }

  ngOnInit(): void {
    this.serviceConsumer.respuestaMasActual().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
