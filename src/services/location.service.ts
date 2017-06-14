import {Injectable} from'@angular/core';
import {Http } from'@angular/http';

@Injectable()
export class LocationService{   
    constructor(private http:Http ){}
    getAllCountries(){ 
       return  this.http.get("http://localhost:7919/rpc/location/countries/getAll").map(data=>data.json());
     }
     getAllCities(){ 
       return  this.http.get("http://localhost:7919/rpc/location/cities/getAll").map(data=>data.json());
     }
     getAllRegiones(){ 
       return  this.http.get("http://localhost:7919/rpc/location/regiones/getAll").map(data=>data.json());
     }
 }
  

