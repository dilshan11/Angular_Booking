import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ownerdetails;
  // private _ownernavbarstatesource=new Subject<boolean>();       //componenet data sharing loggin to owner navbar
  // ownernavbarstate$=this._ownernavbarstatesource.asObservable();

  // private _ownerDetailsSource=new Subject<boolean>();           // owner details share log to ba basic componenet
  // $ownerDetailState=this._ownerDetailsSource.asObservable();

  constructor() { }

  // public sendmessagetoOwnernavbar(message:boolean){
  //   this._ownernavbarstatesource.next(message);
  // }
  // public sendOwnerDetails(ownr){
  //   this._ownerDetailsSource.next(ownr);
  // }
  public passownerobject(own){
    this.ownerdetails=own;
  }
}
