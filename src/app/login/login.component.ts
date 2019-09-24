import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userfrom=new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
  })
  constructor(private custservice:CustomerService) { }

  ngOnInit() {
    this.custservice.getcustomer();
  }
  checkloginc(){
    this.custservice.checklogins(this.userfrom.value);
   //  this.custservice.checklogins(JSON.stringify(this.userfrom.value));
  }
}
