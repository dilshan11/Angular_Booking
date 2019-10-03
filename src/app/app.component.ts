import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ownerdetails;
    navbarstate:any=false;
  constructor(private dataservice:DataService){
    // dataservice.ownernavbarstate$
    // .subscribe(data=>{
    //   this.navbarstate=data;
    // })
    // this.dataservice.$ownerDetailState
    // .subscribe(data=>{
    //   this.ownerdetails=data;
    //   // console.log(this.ownerdetails);
    // });
  }
}
