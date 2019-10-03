import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginstate:any=true;
  logindata;
  userfrom=new FormGroup({                        //reactive form
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    userst:new FormControl(1)
  })
  constructor(private custservice:CustomerService,private router:Router,private dataservice:DataService) { 
    
  }

  ngOnInit() {
    
  }
  checkloginc(){

    this.createlogin();                 // make logindata object for send to backend
    if(this.userfrom.get('userst').value==1){ // user checked
    this.custservice.checkloginsUser(this.logindata)
    .subscribe(data=>{
      console.log(data);
      if(data!=null){ //check email correct and send customerEntity object
      this.loginstate=true;
      this.router.navigate(['/']) //navigate to home 
      }else{
        this.loginstate=false;
      }
    });
  }
  else{                       // asser owner check
    this.custservice.checkloginsOwner(this.logindata)
    .subscribe(data=>{
      
      if(data!=null){         //check email correct and send ownerEntity object
        this.loginstate=true;
         this.dataservice.passownerobject(data);  //pass owner deyails login to basics
          
        
        this.router.navigate(['/owners'])    //naviagete to owner welcme
        }else{
          this.loginstate=false;
        }
    });
   }
  }
   public createlogin(){
    this.logindata={            //make logindata object getting userform data
      email: this.userfrom.get('email').value,
       password: this.userfrom.get('password').value,
    }
   }
}
