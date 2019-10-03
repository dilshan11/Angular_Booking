import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { OwnerNavbarComponent } from './owner/owner-navbar/owner-navbar.component';
import { BookingComponent } from './owner/booking/booking.component';
import { NewhotelComponent } from './owner/newhotel/newhotel.component';
import { WelcomownerComponent } from './owner/welcomowner/welcomowner.component';
import { TutorialComponent } from './owner/tutorial/tutorial.component';
import { BasicsComponent } from './owner/newhotel/basics/basics.component';
import { FacilitiesComponent } from './owner/newhotel/facilities/facilities.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    OwnerNavbarComponent,
    BookingComponent,
    NewhotelComponent,
    WelcomownerComponent,
    TutorialComponent,
    BasicsComponent,
    FacilitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
