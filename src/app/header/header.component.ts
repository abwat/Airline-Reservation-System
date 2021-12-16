import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  buttonFlag!:boolean;
  username:any;
  user!:boolean;
  admin!:boolean;
  loggedin = false;

  constructor(private router:Router){}
  
  ngOnInit(){
      this.user=false;
      this.admin=false;
      if(sessionStorage.getItem('role')==='user'){
          this.user=true;
      }else if(sessionStorage.getItem('role')==='admin'){
          this.admin=true;
      }
       
      this.username=sessionStorage.getItem('username');
      if(this.username!=null)
          this.username=this.username.toUpperCase();
        
  }
  isloggedin()
  {
    return this.loggedin;
  }

  loginPage()
  {
    this.router.navigate(["/login"]);
  }

}

