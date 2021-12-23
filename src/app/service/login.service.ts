import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

  registerCustomer(customer:any)
  {
      return this.http.post(this.url+"auth/register",customer,{headers:{"Content-Type": "application/json"}})
  }

  adminValidation(admin:any)
  {
   // console.log("admin",admin);
    
    return this.http.post(this.url+"admin/AdminHome",admin,{headers:{"Content-Type": "application/json"}})
  }

  getAllFlightDeatils()
  {
    return this.http.get(this.url+"auth/getflights",{headers:{"Content-Type": "application/json"}})
  }

  GetSearchedFlight(source: any,destination: any,date: any)
  {
    return this.http.get(this.url+"auth/get/"+source+"/"+destination+"/"+date);
    //auth/get/Pune/Delhi/10-12-2021
  }

}