import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    constructor(private http:Http){
    }
    getAllItems() {
        return this.http.get("http://localhost:7919/rpc/item/getAll").map(data => data.json());         
    }
    getItemById(id: number) {
        console.log(id);
        return this.http.get(`http://localhost:7919/rpc/item/getbyid/${id}`).map( data =>{ console.log(data.json());return data.json();});
    }
}
