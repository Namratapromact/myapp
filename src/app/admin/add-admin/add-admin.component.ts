import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

/* Type Dropdown */
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

/* Type Dropdown */
  lists: List[] = [
    {value: 'ca-0', viewValue: 'Company Administration'},
    {value: 'manage-1', viewValue: 'Management'},
    {value: 'hr-2', viewValue: 'HR'}
  ];

  constructor(private location: Location) { }

  ngOnInit() {
  }

 /* Go back to AdminList Page */
  goBack(): void {
    this.location.back();
  }
  
  /* To hide Password */
  hide = true;
}
