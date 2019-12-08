import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.scss']
})
export class RoombookComponent implements OnInit {

  constructor(private route: ActivatedRoute,private roomservice:RoomService) { }

  ngOnInit() {
    let roomid=this.route.snapshot.paramMap.get("id");
    this.roomservice.getrooms_relatedtohotel(roomid).
    subscribe(data=>{
      console.log(data);
    })
   
  }

}
