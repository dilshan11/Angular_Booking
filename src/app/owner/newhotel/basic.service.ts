import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
 url="http://localhost:8080";
  constructor(private http:HttpClient,private dataservice:DataService) { }

  store_basicform(propertobj){
    console.log(propertobj);
   return this.http.post(this.url+'/owner/basicform',propertobj);
  }
  storefacilities(facility){
   return this.http.post(this.url+'/owner/facilityform?hotelid='+Number(sessionStorage.getItem('hotelId')),facility);
  }
  storeRooms(rooms){
   return this.http.post(this.url+'/rooms/saveroom?hotelid='+Number(sessionStorage.getItem('hotelId')),rooms);
  }
  storeRoomfacility(roomfacility,roomid){
    return this.http.post(this.url+'/rooms/facility?roomid='+roomid,roomfacility);
  }
}
