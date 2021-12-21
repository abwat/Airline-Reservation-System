import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private url ="http://localhost:8090/";

  private deleteurl="http://localhost:8090/admin/deleteflight";

  constructor(private http:HttpClient) { }

  AddFlight(name:any,src:any,dest:any,status:any,date:any,price:any,eseat:any,bseat:any,time:any)
  {
    let flight={
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
    flight.flightname= name,
    flight.source=src,
    flight.destination= dest,
    flight.status= status,
    flight.availableEconomySeats= eseat,
    flight.availableBussinessSeats= bseat,
    flight.price=price,
    flight.date= date,
    flight.time= time

    return this.http.post(this.url+"admin/addflights",flight,{headers:{"Content-Type": "application/json"}});

  }

  DeleteFlight(id:number):Observable<Object>{
    return this.http.delete(`${this.deleteurl}/${id}`);
  }

}
