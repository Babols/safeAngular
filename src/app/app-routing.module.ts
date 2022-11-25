import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPostDeleteComponent } from './get-post-delete/get-post-delete.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  // { path: '', redirectTo: '/safe', pathMatch: 'full' },
  { path: '', component: LoginComponent},
  { path: 'safe', component: GetPostDeleteComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
