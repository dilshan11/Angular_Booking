import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  facility = new FormGroup({
    outdoor_pool: new FormControl(),
    dryer: new FormControl(),
    indoor_pool: new FormControl(),
    hot_tub: new FormControl(),
    free_parking: new FormControl(),
    gym: new FormControl(),
    heating: new FormControl(),
    closet: new FormControl(),
    fireplace: new FormControl(),
     
    entrance: new FormControl(),
    elevator: new FormControl(),
    wheelchair: new FormControl(),
    doorman: new FormControl(),
 
    breakfast: new FormControl(),
    tea: new FormControl(),
    coffe: new FormControl(),
    teamaker: new FormControl(),
    kitchen: new FormControl(),

    
  });

  constructor() { }

  ngOnInit() {
  }
  ok(){
    console.log(this.facility.value);
  }
}
