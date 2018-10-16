import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  surname: string;
  displayname: string;
  email: string;
  type: string;
  companies: string;
  ipaddress: string;
  enabled: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Mark', surname: 'Jaskula', displayname: 'Mark jaskula-2', email: 'kp1@tsfx.com.au', 
  type: 'Master Administrator', companies: '-', ipaddress: '-', enabled: true}

];

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'displayname', 'email','type','companies','ipaddress','enabled'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }


}
