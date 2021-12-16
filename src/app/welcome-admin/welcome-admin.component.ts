import { AddflightComponent } from './../addflight/addflight.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onAdd()
  {
    this.router.navigate(["/addflight"]);
  }
  onUpdateDelete()
  {
    this.router.navigate(["/update-delete-flight"]);
  }
}