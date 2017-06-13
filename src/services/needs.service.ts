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



    createNeeds( description:string):PromiseLike<INeeds> {
        let body = JSON.stringify({ 
                                description:description});
        
        return this.http.post(this._baseUrl+'/needs', body, {headers:this.headers})
                .toPromise()
                .then(res=>res.json().data )
                .catch(this.handleError)
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
  

