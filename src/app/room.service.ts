import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  get_allhotelof_owner(ownerid){
   return this.http.get('http://localhost:8080/owner/owner_hotel/'+ownerid);
  }

  getrooms_relatedtohotel(roomId){
    return this.http.get(''+roomId);
  }

}
