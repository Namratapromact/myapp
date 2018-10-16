import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


export interface List {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  lists: List[] = [
    {value: 'ca-0', viewValue: 'Company Administration'},
    {value: 'manage-1', viewValue: 'Management'},
    {value: 'hr-2', viewValue: 'HR'}
  ];

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
  
  hide = true;
}
