import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    constructor(private http:Http){
    }
    getAllItems() {
        return this.http.get('http://localhost:7919/rpc/item/getall').map(data => data.json());         
    }
    getItemById(id: number) {
        return this.http.get(`http://localhost:7919/rpc/item/getbyid/${id}`).map( data =>data.json());
    }
}
