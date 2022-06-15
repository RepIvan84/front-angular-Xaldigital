import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from 'src/app/_model/Owner';
import { ApiServiceService } from 'src/app/_service/api-service.service';

@Component({
  selector: 'app-api-consumer-mayor-r',
  templateUrl: './api-consumer-mayor-r.component.html',
  styleUrls: ['./api-consumer-mayor-r.component.css']
})
export class ApiConsumerMayorRComponent implements OnInit {

  displayedColumns: string[] = ['reputation', 'user_id', 'user_type', 'profile_image', 'display_name', 'link'];
  dataSource: MatTableDataSource<Owner>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serviceConsumer: ApiServiceService) { }

  ngOnInit(): void {
    this.serviceConsumer.respuestaMayorReputacion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}
