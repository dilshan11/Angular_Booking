import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }
  saveiit(){
     console.log(this.userfrom.value);
  }
}
