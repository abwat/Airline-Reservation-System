import { AddflightComponent } from './../addflight/addflight.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { DatePipe } from '@angular/common';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {
  SeachedFlights: any;
  isError: boolean=false;
  isUpdate=false;
  constructor(private router: Router,private service :LoginService,public datapipe:DatePipe,
    private service1:AdminServiceService) { }

    ngOnInit(): void {
      
    }

    
  addflight = false;
  onAdd()
  {
    this.addflight = true;
  }

  displayflights = false;
  onpress(source: any,destination: any,date: any)
  {
    // let date1=this.datapipe.transform(date,'dd-MM-yy');
    this.service.GetSearchedFlight(source,destination,date).subscribe((data:any)=>{
      this.SeachedFlights=data;
            
      if(data.length==0)
      {
       // console.log("null",data);
        
        this.isError=true; 
        this.displayflights = false;
      }
      else
      {
       // console.log("not null",data);
        this.displayflights = true;
        this.isError=false; 
      }
  }
  )


  //console.log(source, destination, date);
  
    
  }



  updateStatus(id:number,status:any,source:any,destination:any,date:any)
  {
    this.service1.UpdateFlightStatus(id,status).subscribe(data=>{
      alert("Status of Flight with FlightId "+id+" has been updated to "+status);
      this.onpress(source,destination,date);
    })
    this.isUpdate=false;
    
  }


  delete(id:number,source:any,destination:any,date:any)
  {
    this.service1.DeleteFlight(id).subscribe(data=>{
      this.onpress(source,destination,date);
    })
  }

}
