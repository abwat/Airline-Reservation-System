import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loop:boolean=true;
  auto:boolean=true;
  constructor() { }

  ngOnInit(): void {



  }

}
