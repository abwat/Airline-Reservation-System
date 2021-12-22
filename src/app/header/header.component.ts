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
          
  }
  Logout()
  {
    localStorage.clear();
    this.router.navigate(['/'])
  }

}

