import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicService } from '../basic.service';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
 
declare var ol: any;
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  file: File;
  latitude: number = 18.5204;
  longitude: number = 73.8567;
  ownDetals;
  map: any;
  divbox;
  geolocation;
  iconFeature;
  ptype;  // proert type variable
  propertobject:{pname:String,sadress:String,village:String,city:String,ptype:String,ownerId:number }={pname:null,sadress:null,village:null,city:null,ptype:null,ownerId:null};

  basicform=new FormGroup({
    pname:new FormControl('',Validators.required),
    sadress:new FormControl('',Validators.required),
    village:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required)
  })
fieldvalue=[];
  constructor(private basicservice:BasicService,private dataservice:DataService,private router:Router) {
    
   }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([80.1011963,6.1406999]),
        zoom: 6
      })
       
    });
        this.ownDetals=this.dataservice.ownerdetails;
        console.log(this.ownDetals);
  }

  onFileAdd(file: File) {
    this.file = file;
    }
    
    onFileRemove() {
    this.file = null;
    }

  submitPropertyForm(){ 
    if(this.validate_field()){
    this.propertobject.pname=this.basicform.get('pname').value;
       this.propertobject.sadress =this.basicform.get('sadress').value;
        this.propertobject.village =this.basicform.get('village').value;
        this.propertobject.city =this.basicform.get('city').value;
        this.propertobject.ownerId=Number(sessionStorage.getItem('ownerId'));
         
        this.basicservice.store_basicform(this.propertobject).
        subscribe(data=>{
          this.dataservice.setHotelid(data);
          sessionStorage.setItem('hotelId',data.toString());
            this.router.navigateByUrl('/owners/newHotel/facilities');
        });
    }
  }
  validate_field(){
    this.fieldvalue[4]=this.ptype==null?true:false;
    this.fieldvalue[0]=this.basicform.get('pname').invalid;
    this.fieldvalue[1]=this.basicform.get('sadress').invalid;     //validate 4 field
    this.fieldvalue[2]=this.basicform.get('village').invalid;
    this.fieldvalue[3]=this.basicform.get('city').invalid;
    return !this.fieldvalue[0]&&!this.fieldvalue[1]&&!this.fieldvalue[2]&&!this.fieldvalue[3]&&!this.fieldvalue[4];
  }
  property_type1(box1,box2){     //select which property type
      box1.style.color="#00695c";
      box2.style.color="black";
      this.ptype="Hotel"
      this.propertobject.ptype=this.ptype;
  }
  property_type2(box1,box2){     //select which property type
    box2.style.color="#00695c";
    box1.style.color="black";
    this.ptype="House";
    this.propertobject.ptype=this.ptype;
    }
}

