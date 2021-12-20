import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Flights:any;
  SeachedFlights:any;
  isSearched:boolean=true;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.getAllFlightDeatils().subscribe(data=>{
      this.Flights=data;
      console.log(data);      
    })

  }
  SeachFlight(source: any, destination: any, date: any)
  {
    this.service.GetSearchedFlight(source,destination,date).subscribe(data=>{
        this.SeachedFlights=data;
        this.isSearched=false
    })
      //console.log(source,destination,date);
  }

}
