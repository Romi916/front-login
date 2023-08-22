import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { AdminModule } from './admin/admin.module';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:AuthComponent},
  {path:'dashboart', component:PagesComponent,
    children:[
      {path:'admin',
      loadChildren:()=>import('./admin/admin.module').then( m => m.AdminModule)
    
    }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
