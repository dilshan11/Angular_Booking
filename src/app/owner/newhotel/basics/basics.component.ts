import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timingSafeEqual } from 'crypto';
declare var ol: any;
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: any;
  divbox;
  geolocation;
  iconFeature;
  ptype;  // proert type variable
  propertobject:{pname:String,sadress:String,village:String,city:String,ptype:String}={pname:null,sadress:null,village:null,city:null,ptype:null};

  basicform=new FormGroup({
    pname:new FormControl('',Validators.required),
    sadress:new FormControl('',Validators.required),
    village:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required)
  })

  constructor() {
    
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
  }
  submitPropertyForm(){ 
    this.propertobject.pname=this.basicform.get('pname').value;
       this.propertobject.sadress =this.basicform.get('sadress').value;
        this.propertobject.village =this.basicform.get('village').value;
        this.propertobject.city =this.basicform.get('city').value;
    console.log(this.propertobject);
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

