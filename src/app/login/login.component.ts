import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId:string='';
  password:string='';
  
  
  isError:boolean=true;
  constructor(private loginserv: LoginService,private router : Router) { }

  ngOnInit(): void {
  }

   login()
  {
     
      
      this.loginserv.validateLogin(this.emailId,this.password).subscribe(data=>{
        if(data==200)
        {
          this.isError=true;
          // this.router.navigate(['/TicketBook']);
         // console.log(data)
        }
      },
      err=>{
        //console.log('error', err.status);
        this.isError=false;
      }
      
      )
  }
}
