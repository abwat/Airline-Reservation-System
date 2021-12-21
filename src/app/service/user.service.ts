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
}
