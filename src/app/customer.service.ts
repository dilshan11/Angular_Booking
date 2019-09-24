import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public sd(){
    
  }
  public getcustomer(){
    this.http.get("http://localhost:8080/api/customer",{responseType: 'text'})
    .subscribe(a=>{
      
    })
  }
  public checklogins(logindetails){
    console.log(logindetails);
    return this.http.post("http://localhost:8080/api/login",logindetails)
    .subscribe(data=>{
      console.log(data);
    });
  }
}
