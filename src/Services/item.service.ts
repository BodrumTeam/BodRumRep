import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ItemService {
     constructor(private http:Http){
    }
     getAllItems() {
        return this.http.get("http://localhost:7919/rpc/item/getAll").map(data=>data.json());         
     }
}