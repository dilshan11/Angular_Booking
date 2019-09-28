import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _ownernavbarstatesource=new Subject<boolean>();       //componenet data sharing loggin to owner navbar
  ownernavbarstate$=this._ownernavbarstatesource.asObservable();
  constructor() { }
  public sendmessagetoOwnernavbar(message:boolean){
    this._ownernavbarstatesource.next(message);
  }
}
