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
  isError=false;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.getAllFlightDeatils().subscribe(data=>{
      this.Flights=data;
      console.log(data);      
    })

  }
  SeachFlight(source: any, destination: any, date: any)
  {
    this.service.GetSearchedFlight(source,destination,date).subscribe((data:any)=>{
        this.SeachedFlights=data;
        if(data.length==0)
      {
       // console.log("null",data);
        
        this.isError=true; 
        this.isSearched=true
      }
      else
      {
       // console.log("not null",data);
       this.isSearched=false
       this.isError=false; 
      }
       
    })
      //console.log(source,destination,date);
  }

  
 
}

