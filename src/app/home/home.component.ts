import { Component, OnInit } from '@angular/core';
import { MDBModalService } from 'angular-bootstrap-md';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(mdmodalservice:MDBModalService) { 
     
  }

  ngOnInit() {
  }

}
