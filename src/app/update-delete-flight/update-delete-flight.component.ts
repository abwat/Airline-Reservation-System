import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-delete-flight',
  templateUrl: './update-delete-flight.component.html',
  styleUrls: ['./update-delete-flight.component.css']
})
export class UpdateDeleteFlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   showflight = false;
  Showflights()
  {
    this.showflight = true;
  }
}
