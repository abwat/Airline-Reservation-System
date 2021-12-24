import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {

  p=1;
  Flights:any;
  constructor(private service: LoginService) { }

  ngOnInit(): void {

    this.service.getAllFlightDeatils().subscribe(data=>{
      this.Flights=data;
      console.log(data);      
    })
  }

}
