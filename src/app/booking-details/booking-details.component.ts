import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})




export class BookingDetailsComponent implements OnInit {
  flight={
    flightid:'',
    flightname: '',
    source: '',
    destination: '',
    date: '',
    time:'',
    name: ''
  };
  user={
    userId:'',
    name: '',
    age: '',
    gender: '',
    phonenumber: '',
    emailId:'',

  };
    
  FId=localStorage.getItem("FlightId");
  UserId= localStorage.getItem("UserId");
  UserEmail=localStorage.getItem("UserEmail");
  UserPassword=localStorage.getItem("UserPassword");

  Bseat:any= localStorage.getItem("Bseat");
  Eseat:any= localStorage.getItem("Eseat");
  price:any;

  constructor(private service: UserService,private route: Router) { 
    
  }

  ngOnInit(): void {
    this.service.GetUserById(this.UserId).subscribe((data:any)=>{
      this.user=data;
      //console.log("Userkkkkkkkk",data);
    })

    this.service.GetFlightById(this.FId).subscribe((response:any)=>{
      this.flight=response;
      this.price=((Number(this.Bseat)*2)+Number(this.Eseat))* Number(response.price)
    })
  }
  ConfirmBooking()
  {
    let Seat={
      "bookedEconomySeats":this.Eseat,
      "bookedBussinessSeats":this.Bseat
    }
    this.service.BookFlight(this.user.emailId,this.UserPassword,this.user.userId,this.flight.flightid,Seat)
    .subscribe(data=>{
      console.log(data);
      alert("Booking Successful");
      this.route.navigate(['/booking']);
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigate(['/']);
  }

}
