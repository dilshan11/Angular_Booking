import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BasicService } from '../basic.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  hotelid;
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
    coffee: new FormControl(),
    teamaker: new FormControl(),
    kitchen: new FormControl(),

    
  });

  constructor(private basicservice:BasicService,private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.hotelid=this.dataservice.hotelid;
    
  }

  sendfacility_form(){
     this.basicservice.storefacilities(this.facility.value).
     subscribe(data=>{
       if(data){
        this.router.navigateByUrl('/owners/newHotel/rooms');
       }
       console.log(data);
     });
  }
}
