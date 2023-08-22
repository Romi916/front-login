import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminCreateComponent,
    AdminListComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
