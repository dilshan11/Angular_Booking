import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regfname=[];
  radiostate=true;
  statepwd=true;

  registerform=new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    repassword:new FormControl(),
    phnumber:new FormControl('',Validators.required)
  })

  constructor(private custservice:CustomerService) {
   
   }

  ngOnInit() {
  }
  public saveRegisterDetailsr(){
     if(this.radiostate){ //user login
     this.statepwd=this.passwordChecker();
     if(this.getValidateState() && this.passwordChecker()){
    this.custservice.saveUserRegisterDetailss(this.registerform.value)
    .subscribe(data=>{
      console.log( data);
    });
  }
}else{  //customer login
  this.statepwd=this.passwordChecker();
  if(this.getValidateState() && this.passwordChecker()){
 this.custservice.saveOwnerRegisterDetailss(this.registerform.value)
 .subscribe(data=>{
   console.log( data);
 });
}
}
    
  }
  getValidateState(){
  this.regfname[0]=this.registerform.get('fname').invalid;
  this.regfname[1]=this.registerform.get('lname').invalid;
  this.regfname[2]=this.registerform.get('email').invalid;
  this.regfname[3]=this.registerform.get('password').invalid;
  this.regfname[4]=this.registerform.get('phnumber').invalid;
  return !this.regfname[0] && !this.regfname[1] && !this.regfname[2] && !this.regfname[3] && !this.regfname[4]; 
  }
  passwordChecker(){
   

     if(this.registerform.value.password==this.registerform.value.repassword){
       return true;
     }else{
       return false;
     }
   }
   radiooperateuser(){
    this.radiostate=true;
   }
   radiooperateowner(){
    this.radiostate=false;
   }
   
}
