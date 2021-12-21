import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  both:boolean=true;
  SeachedFlights: any;
  isError: boolean=false;
  
  constructor(private router: Router,private service :LoginService,private userService: UserService) { }

  SearchFlight(source:string, destination:string,date:any){
    if(source && destination && date){
      console.log(source, destination, date);
      this.service.GetSearchedFlight(source,destination,date).subscribe((data:any)=>
        {
          console.log(data);
          this.SeachedFlights= data; 
        });
      //this.both = true;
    }
  }

  BookFlight(flightid:any,Bseat:any,Eseat:any)
  {
   // console.log("fllightid",flightid,Bseat,Eseat);
     localStorage.setItem("FlightId",flightid);
     localStorage.setItem("Bseat",Bseat);
     localStorage.setItem("Eseat",Eseat);
    //console.log("UserId",UserId,UserEmail,UserPassword);

    

    this.router.navigate(['/bookingDetails']);
  }
  ngOnInit(): void {
  }


}
