import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {
     constructor(private http:Http){
    }
     GetAllUsersInfo() {
        return this.http.get("http://localhost:7919/rpc/profile/getAll").map(data=>data.json());         
     }
     GetUserByUsername(username:string) {
        return this.http.get(`http://localhost:7919/rpc/profile/getByUsername/${username}`).map(data=>data.json());         
     }
}