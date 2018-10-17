import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { DeleteadminComponent } from './deleteadmin/deleteadmin.component';

const adminRoutes: Routes = [

  { path: 'adminlist', component: AdminListComponent },
        
  { path: 'addadmin', component: AddAdminComponent },

  { path: '', component: DeleteadminComponent} 

];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
