import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProfileService} from '../services/profile.service';
import {ItemService} from '../services/item.service';
import { IUsers } from '../models/IUsers';
import {IITem} from '../models/IItems'
import { ActivatedRoute,Route } from '@angular/router';

const styles = require('./profile.css');
const template = require('./profile.html');

@Component({
 //moduleId:module.id,
  selector: 'profile',
  template: template,
  styles: [ styles ]
})

export class ProfileComponent implements OnInit {
    constructor(private x:ProfileService,private xx:ActivatedRoute,private y:ItemService) {}
    user:IUsers;
    item:Array<IITem>;
    username:string;
    ngOnInit(){
        this.username=this.xx.snapshot.params['username'];
       //alert('kkk');
       //alert("aaa : " + this.userId);
      // alert(this.username);
       this.x.GetUserByUsername(this.username).subscribe(data=>{this.user=data,console.log(this.user.id)});
       this.y.getAllItems().subscribe(data=>{this.item=data;console.log(this.item[0].fk_userId)});
      
    // this.id2 =this.xx.snapshot.params['itemId'];
    // this.y.GetItemById(this.id2).subscribe(data=>this.item=data);
}
}