import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import {NgModel} from '@angular/forms';

import{LocationService}from '../services/location.service'
import{Country}from '../models/Country'
import{City}from '../models/City'
import{Region}from '../models/Region'
<<<<<<< HEAD

=======
>>>>>>> 913f77aa141caad863c14816749057ff1df65f72
import {Observable} from 'rxjs/Observable';

const styles   = require('./signup.css');
const template = require('./signup.html');

@Component({
  selector: 'signup',
  template: template,
  styles: [ styles ]
})
export class Signup implements OnInit{
  countries : Country[] ;
  cities : City[] ;
  newCities : City[] ;
  regiones : Region[] ;
  newRegiones : Region[] ;
  gender : string ;
  fk_countryId : number ;
  fk_cityId : number ;
  fk_regionId : number ;

  selectedCountry:Country = new Country(0,'') ;
  selectedCity:City = new City(0,'',0) ;
  
  ngOnInit(): void {
  }

  constructor(public router: Router, public http: Http,public locationService : LocationService) {
    this.locationService.getAllCountries().subscribe(data => this.countries = data );
    this.locationService.getAllCities().subscribe(data => this.cities = data );
    this.locationService.getAllRegiones().subscribe(data => this.regiones = data );
  }

onSelectCountry(countryId:Number) {
    this.newCities = this.cities.filter((item)=>item.Fk_countryId==countryId);
    this.newRegiones = [];
}
onSelectCity(cityId:Number){
    this.newRegiones = this.regiones.filter((item)=>item.Fk_cityId==cityId);
}
//
  signup(event , name , username , password , email , age , mobile) {
    event.preventDefault();
    let gender = this.gender;
    let fk_countryId = this.fk_countryId;
    let fk_cityId = this.fk_cityId;
    let fk_regionId = this.fk_regionId;
    let body = JSON.stringify({ name , username, password , email , age , mobile ,gender, fk_countryId , fk_cityId , fk_regionId});
    this.http.post('http://localhost:7919/rpc/account/signup', body, { headers: contentHeaders })
      .subscribe(
        response => {
          //localStorage.setItem('curUserId',response.json().userId);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
