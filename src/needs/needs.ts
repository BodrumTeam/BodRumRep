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
    needs : Array<INeeds> = [];
    users : Array<IUsers>;
    selectedNeed :INeeds;
    subsc :any;
    desc : string = '' ;
    constructor(private needsService:NeedsService,public router: Router) {}

    ngOnInit():void{
        this.needsService.getAllNeeds().subscribe((data)=>this.needs=data,e =>console.log(e),()=>alert("completed : " + this.needs[0].description));    
    
  
}


   onNewNeed(event,description : string){
       alert("needs is edited");
        event.preventDefault();
       this.needsService.addNeeds(description).subscribe((need=>{console.log(need);this.needs.push(need);this.desc=' '}));
      

   } 
  
  onAddNeed(event,description : string){
      alert("needs is edited");
        event.preventDefault();
        let _need:any = {description : description , id :0 }
        alert(description);
        this.needsService.addNeeds(_need).subscribe((need=>{this.needs.push(need);description='';})) 
  }
    

  onDeleteNeed(id:any){
      var flag:boolean  = confirm("Are you sure you want delete your need ?");
      if(flag == true){
        var _need = this.needs;
        
        this.needsService.deleteNeed(id).subscribe((data)=>this.needs=data
      );

      }

  }  


 removeNeeds(need:INeeds): void{
        this.selectedNeed = need;
        this.needsService.deleteNeed(this.selectedNeed.id)
            .subscribe(() => {
               
                this.needsService.getAllNeeds().subscribe((data) => {
                        this.needs =data ;
                    },
                    error => {
                        console.log('Failed to load Needs '+error);
                    });
            },
            )
     }
}