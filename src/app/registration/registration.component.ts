import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer={
    name:'',
    password:'',
    address:'',
    emailId:'',
    gender:'',
    age:'',
    phonenumber:'',
  }

  constructor(private loginServ : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register()
  {
       this.loginServ.registerCustomer(this.customer).subscribe(data=>{
         console.log(data);
       });
       this.router.navigate(['/login']);
  }

}
