import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin={
    emailId:'',
    password:'',
  }
  isError:boolean=true;
  constructor(private loginservice : LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  OnLogin()
  {
    this.loginservice.adminValidation(this.admin).subscribe(data=>{
    if(data==200)
    {
      this.isError=true;
      //console.log(data);
      this.route.navigate(['/welcome-admin']);
    }
   },err=>{
    //console.log('error', err.status);
    this.isError=false;
  }
   );
    
    
  }

}
