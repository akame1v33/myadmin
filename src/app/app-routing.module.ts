import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { PermissionComponent } from './permission/permission.component';


const routes: Routes = [
  {path: '',         redirectTo: 'user', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'user',      component: UserComponent},
  {path:'permission',      component: PermissionComponent},
];

export const routingComponents = [
  UserComponent,
  DashboardComponent,
  // PermissionComponent
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
