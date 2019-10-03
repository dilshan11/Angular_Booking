import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  ownerdetails;

  constructor(private http:HttpClient) { }

  
  public getcustomer(){
    this.http.get("http://localhost:8080/api/customer",{responseType: 'text'})
    .subscribe(a=>{
      
    })
  }
  public checkloginsUser(logindetails){
    console.log(logindetails);
    return this.http.post("http://localhost:8080/customer/login",logindetails)
  }
  public checkloginsOwner(logindetails){
    console.log(logindetails);
    return this.http.post("http://localhost:8080/owner/login",logindetails)
  }
  public saveUserRegisterDetailss(registerDetails){
    return this.http.post("http://localhost:8080/customer/registerUser",registerDetails,{responseType: 'text'})
  }
  public saveOwnerRegisterDetailss(registerDetails){
    console.log(registerDetails);
    return this.http.post("http://localhost:8080/owner/registerOwner",registerDetails,{responseType: 'text'})
    this.ownerdetails=registerDetails;
    console.log(registerDetails);
  }
}
