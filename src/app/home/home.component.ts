import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p=1;
  Flights:any;
  SeachedFlights:any;
  isSearched:boolean=true;
  isError=false;
  SearchForm={
    source:'',
    destination:'',
    date:''
  };
  
  constructor(private service: LoginService,public datapipe:DatePipe) {
    // this.SearchForm = new FormGroup({
    //   source: new FormControl('',Validators.required),
    //   destination: new FormControl(''),
    // });
   }

  ngOnInit(): void {
    localStorage.clear();

    this.service.getAllFlightDeatils().subscribe(data=>{
      this.Flights=data;
      console.log(data);      
    })

  }
  GetFormData(){
    console.log('form data', this.SearchForm);
    
  }
  SeachFlight(source: any, destination: any, date: any)
  {
    
    this.service.GetSearchedFlight(source,destination,date).subscribe((data:any)=>{
        this.SeachedFlights=data;
        if(data.length==0)
      {
       // console.log("null",data);
        
        this.isError=true; 
        this.isSearched=true;
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

