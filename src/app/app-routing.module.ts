import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './owner/booking/booking.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'booking',component:BookingComponent},
 ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
