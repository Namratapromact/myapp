import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { DeleteadminComponent } from '../deleteadmin/deleteadmin.component';


/* Admin list Fields */ 
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
  {
    name: 'Mark', surname: 'Jaskula', displayname: 'Mark jaskula-2', email: 'kp1@tsfx.com.au', 
    type: 'Master Administrator', companies: '-', ipaddress: '-', enabled: true
  }

];

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  /* Admin list Fields Display */

    displayedColumns: string[] = ['name', 'surname', 'displayname', 'email','type','companies','ipaddress','enabled'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

     constructor(public dialog: MatDialog) {}

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  /* Delete Popup Dialog */
  
    openDialog(): void {
      const dialogRef = this.dialog.open(DeleteadminComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
