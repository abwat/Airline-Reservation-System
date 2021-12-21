import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId:string='';
  password:string='';
  
  isError:boolean=true;
  constructor(private service: UserService,private router : Router) { }

  ngOnInit(): void {
  }

   login()
  {
     
      
      this.service.validateLogin(this.emailId,this.password).subscribe((data:any)=>{
        if(data>0)
        {
          const id=data
          localStorage.setItem("UserId",id);
          localStorage.setItem("UserEmail",this.emailId);
          localStorage.setItem("UserPassword",this.password);
          this.isError=true;
          this.router.navigate(['/booking']);
          console.log(data)
        }
      },
      err=>{
        //console.log('error', err.status);
        this.isError=false;
      }
      
      )
  }
}
