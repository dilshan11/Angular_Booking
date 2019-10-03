import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
 url="http://localhost:8080";
  constructor(private http:HttpClient) { }

  store_basicform(propertobj){
    console.log(propertobj);
   return this.http.post(this.url+'/owner/basicform',propertobj);
    
  }
}
