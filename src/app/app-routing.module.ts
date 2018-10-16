import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin/admin-list/admin-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/adminlist', pathMatch: 'full' },
  { 
    path: 'adminlist', component: AdminListComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
  declarations: []
})
export class AppRoutingModule { }
