import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NeedsService} from '../services/needs.service';
import{INeeds}from '../models/INeeds'
import{IUsers}from '../models/IUsers'
import {Observable} from 'rxjs'

const styles = require('./needs.css');
const template = require('./needs.html');

@Component({
 //moduleId:module.id,
  selector: 'needs',
  template: template,
  styles: [ styles ]
})
export class Needs implements OnInit {
    needs : Array<INeeds>;
    users : Array<IUsers>;
    subsc :any;
    constructor(private needsService:NeedsService,public router: Router) {}

    ngOnInit():void{
        this.needsService.getAllNeeds().subscribe((data)=>this.needs=data,e =>console.log(e),()=>alert("completed : " + this.needs[0].description + this.needs[0].fk_userId));    
    
  
}


    newNeed(description:string):void{
        this.needsService.createNeeds(description)
        .then(need => {
            this.needs.push(need);
        });
     }

    
}