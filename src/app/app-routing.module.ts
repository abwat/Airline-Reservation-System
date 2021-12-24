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
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AuthGuard } from 'src/auth.guard';
import { AdminAuthGuard } from 'src/admin-auth.guard';
import { AllFlightsComponent } from './all-flights/all-flights.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path:"addflight",component:AddflightComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"welcome-admin",component:WelcomeAdminComponent,
    canActivate: [AdminAuthGuard]
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
    component: BookingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "bookingDetails",
    component: BookingDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "ViewBooking",
    component: ViewBookingComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
