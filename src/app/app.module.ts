import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule,
  MatSelectModule, MatSidenavModule, MatListModule, MatDividerModule, MatTableModule, MatSlideToggleModule, 
  MatFormFieldModule, MatInputModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddAdminComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    LayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
