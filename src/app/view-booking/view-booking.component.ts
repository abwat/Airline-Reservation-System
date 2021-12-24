import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  FlightDetails:any;
  id=localStorage.getItem("UserId");
  constructor(private sevice: UserService) { }

  ngOnInit(): void {

    console.log("gshhhhhhs",this.id);
    

    this.sevice.GetBookingById(this.id)
    .subscribe(response=>
      {
        console.log('flight response',response);
        this.FlightDetails = response;
      })
  }

  cancel(bookingid:any){

    console.log(bookingid)
    this.sevice.deletebooking(bookingid).subscribe(response=>
      {
        alert("Your Booking with id "+bookingid+" has been canceled")
        this.ngOnInit()
      })

  }
}
