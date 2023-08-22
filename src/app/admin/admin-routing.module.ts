import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';



const routes: Routes = [
  {path:'admins',component: AdminListComponent},
  {path:'adminCreate',component: AdminCreateComponent},
  {path:'adminEdit/:id',component:AdminEditComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
