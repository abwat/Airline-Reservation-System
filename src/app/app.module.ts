import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AddflightComponent } from './addflight/addflight.component';
import { UpdateDeleteFlightComponent } from './update-delete-flight/update-delete-flight.component';
import { ShowflightsComponent } from './showflights/showflights.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingComponent } from './booking/booking.component';
import { BookingCardComponent } from './booking-card/booking-card.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DatePipe } from '@angular/common';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    WelcomeAdminComponent,
    AddflightComponent,
    UpdateDeleteFlightComponent,
    ShowflightsComponent,
    RegistrationComponent,
    AdminLoginComponent,
    BookingComponent,
    BookingCardComponent,
    BookingDetailsComponent,
    ViewBookingComponent,
    AllFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
