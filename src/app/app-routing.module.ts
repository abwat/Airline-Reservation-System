import { UpdateDeleteFlightComponent } from './update-delete-flight/update-delete-flight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ShowflightsComponent } from './showflights/showflights.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  
  {
    path:"update-delete-flight",component:UpdateDeleteFlightComponent
  },
  {
    path: "showflight",
    component: ShowflightsComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path:"addflight",component:AddflightComponent
  },
  {
    path:"welcome-admin",component:WelcomeAdminComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:"registration",
    component: RegistrationComponent
  },
  {
    path: "adminLogin",
    component: AdminLoginComponent
  },
  {
    path:"booking",
    component: BookingComponent
  },
  {
    path: "bookingDetails",
    component: BookingDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
