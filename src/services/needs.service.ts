import {Injectable} from'@angular/core';
import {Http ,Response, RequestOptions, Headers } from'@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import{INeeds}from '../models/INeeds'

@Injectable()
export class NeedsService{

     private headers = new Headers({'Content-Type': 'application/json'});

    _baseUrl: string = '';
   
    constructor(private http:Http ){}

    getAllNeeds(){ 
        
       return  this.http.get("http://localhost:7919/rpc/needs/getAll").map(data=>data.json());
     }



    addNeeds( description:string) {
        let body = JSON.stringify({ 
                                description:description});
        
        return this.http.post('http://localhost:7919/rpc/needs/addNeed', body, {headers:this.headers})
                .map(res=>res.json());
    }
    

    updateNeed(need:INeeds){
        let headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.put('' + need.id ,JSON.stringify(need) ,{headers:headers}).map(res=>res.json());
    }


   deleteNeed(id:any){
      return this.http.delete("http://localhost:7919/rpc/needs/delete/" + id).map(res=>res.json());

   }
 
   





    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }



 }
  

