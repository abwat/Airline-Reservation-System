import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url ="http://localhost:8090/";
  constructor(private http: HttpClient) { }
  validateLogin(name:string,password:string)
  {
  
  return this.http.get(this.url +"user/home",{
    headers:{
      "content-type": "application/json",
      authorization: "Basic "+ btoa(name+":"+password)
    }
  })
  }

  BookFlight(name:any,password:any,Uid:any,Fid:any,Seat:any)
  {
    // console.log(
    //   "BookFlight",name,password,Uid,Fid,Seat
    // );
    
  return this.http.post(this.url +"user/"+Uid+"/book/"+Fid,
    Seat,
    {
      headers:{
        "content-type": "application/json",
        authorization: "Basic "+ btoa(name+":"+password)
      }
    }
  )
  }
  GetUserById(id:any)
  {
    let name=localStorage.getItem("UserEmail");
    let password=localStorage.getItem("UserPassword");
    return this.http.get(this.url +"user/getuser/"+id,
    {
      headers:{
        "content-type": "application/json",
        authorization: "Basic "+ btoa(name+":"+password)
      }
    }
  )
  }

  GetFlightById(id:any)
  {
    let name=localStorage.getItem("UserEmail");
    let password=localStorage.getItem("UserPassword");
    
    
    return this.http.get(this.url +"user/getflight/"+id,
    {
      headers:{
        "content-type": "application/json",
        authorization: "Basic "+ btoa(name+":"+password)
      }
    }
  )
  }

  GetBookingById(id:any)
  {
    let name=localStorage.getItem("UserEmail");
    let password=localStorage.getItem("UserPassword");
    console.log("lllllllllll",name,password);
    
    return this.http.get(this.url+"user/bookings/"+id,
    {
      headers:{
        "content-type": "application/json",
        authorization: "Basic "+ btoa(name+":"+password)
      }
    }    
    )
  }
}
