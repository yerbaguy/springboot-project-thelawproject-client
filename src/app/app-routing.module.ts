import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path: 'mainpage', component: MainpageComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'homepage',  component: HomepageComponent },
  { path: 'logout', component: LogoutComponent}
 // { path: 'homepage', redirectTo:'/homepage'}
 

  // { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {
  //   onSameUrlNavigation: 'reload'
  // })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = { MainpageComponent, RegistrationComponent, LoginComponent, LogoutComponent}