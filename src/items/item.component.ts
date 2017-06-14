import { Component, OnInit , OnDestroy , Directive } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { ItemService } from '../services/item.service';
import { IITem } from '../Models/IItems';
// import * as $ from'jquery';
// declare var $:any;

const styles = require('./item.component.css');
const template = require('./item.component.html');
//const jq = require('./item.jquery.js');

@Component({
 //moduleId:module.id,
  selector: 'items',
  template: template,
  styles: [ styles ],
})

export class ItemsComponent implements OnInit , OnDestroy{
  items : Array<IITem> ;
  subc : any;
  hamada = "ay7aga";
  
  constructor(private itemService: ItemService, public router: Router, public http: Http) {}
  ngOnInit(): void {
    this.subc = this.itemService.getAllItems().subscribe(data=>
                this.items=data,error=>console.log(error),
                ()=>console.log(`completed : ${this.items[0].photo} 
                ${this.items[0].description}` ));    
  }
  ngOnDestroy(): void {
    this.subc.unsubscribe();
  }

  selectbyid(item:IITem){
        this.router.navigate(['item',item.id]);
  }

  isError: boolean = false;
  
}
