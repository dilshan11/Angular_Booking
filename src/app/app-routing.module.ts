import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './owner/booking/booking.component';
import { NewhotelComponent } from './owner/newhotel/newhotel.component';
import { WelcomownerComponent } from './owner/welcomowner/welcomowner.component';
import { TutorialComponent } from './owner/tutorial/tutorial.component';
import { BasicsComponent } from './owner/newhotel/basics/basics.component';
import { FacilitiesComponent } from './owner/newhotel/facilities/facilities.component';
import { RoomsComponent } from './owner/newhotel/rooms/rooms.component';
import { FristComponent } from './frist/frist.component';

const routes: Routes=[
  {path: '', component: FristComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'owners',component:WelcomownerComponent, // owner navigation load to this router outlet
  children:[
    {path:'',redirectTo:'tutorial',pathMatch:'full'},
    {path:'tutorial',component:TutorialComponent},
    {path:'booking',component:BookingComponent},
    {path:'newHotel',component:NewhotelComponent,
          children:[
            {path:'',redirectTo:'basics',pathMatch:'full'},
            {path:'basics',component:BasicsComponent},
            {path:'facilities',component:FacilitiesComponent},
            {path:'rooms',component:RoomsComponent}
          ]},
  ]},
  
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
