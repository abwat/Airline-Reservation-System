import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  AddFlight={
    flightName:'',
    source:'',
    destination:'',
    date:'',
    status:'',
    time:'',
    price:'',
    eseat:'',
    bseat:'',
  };

  constructor(private service: AdminServiceService,private router: Router) { }

  ngOnInit(): void {
    
  }
  Addflight(name:any,src:any,dest:any,status:any,date:any,price:any,eseat:any,bseat:any,time:any)
  {
    console.log(name,dest,status,date,price,eseat,bseat);
    this.service.AddFlight(name,src,dest,status,date,price,eseat,bseat,time).subscribe(data=>{
      console.log("new Flight", data);
      alert("New Flight Added");
    })
    window.location.reload();
  }
}
