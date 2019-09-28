import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navbarstate:any=false;
  constructor(private dataservice:DataService){
    dataservice.ownernavbarstate$
    .subscribe(data=>{
      this.navbarstate=data;
    })
  }
}
