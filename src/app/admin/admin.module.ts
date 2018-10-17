import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// import { DeleteadminComponent } from './deleteadmin/deleteadmin.component';
// import { AdminListComponent } from './admin-list/admin-list.component';
// import { AddAdminComponent } from './add-admin/add-admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    // AdminListComponent,
    // AddAdminComponent
    // DeleteadminComponent
]
})
export class AdminModule { }
