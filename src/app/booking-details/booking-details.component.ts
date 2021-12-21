import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flight={
    flightname: "",
    source:"",
    destination: "",
    status: "",
    availableEconomySeats:NaN,
    availableBussinessSeats: NaN,
    price:NaN,
    date: "",
    time: ""
    };
    

}
