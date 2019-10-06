import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  
  a1=0;
  a2=0;
  room = new FormGroup({
    rtype: new FormControl(),
    sleppers: new FormControl(),
    room_amount:new FormControl(),
    price:new FormControl(),
    facts:new FormControl()
  })

  roomfacility=new FormGroup({
    city_view:new FormControl(),
    free_wifi:new FormControl(),
    air_conditioning:new FormControl(),
    bathroom:new FormControl(),
    tv:new FormControl(),
    satalite_channel:new FormControl(),
    iron:new FormControl(),
    showers:new FormControl(),
    telephone:new FormControl(),
    dryer:new FormControl(),
    slipers:new FormControl(),
  })
  constructor(private dataservice:DataService,private basicService:BasicService) { }

  ngOnInit() {
     this.room.get('sleppers').setValue(this.a1);
     this.room.get('room_amount').setValue(this.a2);
  }

  addsleeper(){
     this.a1=this.a1+1;
     this.room.get('sleppers').setValue(this.a1);

  }
  removesleeper(){
     this.a1=this.a1-1;
     this.room.get('sleppers').setValue(this.a1);
  }

  addrooms(){
     this.a2=this.a2+1;
     this.room.get('room_amount').setValue(this.a2);

  }
  removerooms(){
    this.a2=this.a2-1;
    this.room.get('room_amount').setValue(this.a2);

  }
  saveRoomDetails(){
    this.basicService.storeRooms(this.room.value)
    .subscribe(data=>{
      this.basicService.storeRoomfacility(this.roomfacility.value,data)
      .subscribe(data2=>{
        console.log(data2);
        this.room.reset();
        this.roomfacility.reset();
      
      })
    });
    
  }
}
