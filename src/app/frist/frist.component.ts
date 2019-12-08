import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-frist',
  templateUrl: './frist.component.html',
  styleUrls: ['./frist.component.scss']
})
export class FristComponent implements OnInit {

  datepicker=new FormGroup({
    location: new FormControl(),
    checkin:new FormControl(),
    checkout:new FormControl(),
    rooms:new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }
   find_hotel(){
     console.log(this.datepicker.value);
   }

}
