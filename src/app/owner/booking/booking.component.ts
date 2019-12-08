import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/room.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  b;
  constructor(private roomservice:RoomService, private dataservice:DataService,private router:Router) { }

  ngOnInit() {
  //  console.log(this.dataservice.ownerdetails.id);
    this.roomservice.get_allhotelof_owner(sessionStorage.getItem("owner_id")).
    subscribe(data=>{
      console.log(data);
      this.b=data;
    });

  }

}
