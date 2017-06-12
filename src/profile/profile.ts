import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
const styles = require('./profile.css');
const template = require('./profile.html');

@Component({
 //moduleId:module.id,
  selector: 'profile',
  template: template,
  styles: [ styles ]
})
export class Profile {
   userId : Number;
    constructor(private aRoute:ActivatedRoute){}
    
    
    ngOnInit(){
        this.userId = this.aRoute.snapshot.params['userId'];
        alert(this.userId);
        
    }
}
