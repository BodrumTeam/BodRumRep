import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ItemService } from '../services/item.service';
import { IITem } from '../Models/IItems';

import { ActivatedRoute, Route } from '@angular/router';

const styles = require('../items/item.component.css');
const template = require('./detail.component.html');

@Component({
    //moduleId:module.id,
    selector: 'detail',
    template: template,
    styles: [styles]
})
export class DetailComponent implements OnInit, OnDestroy {
    // items : Array<IITem> ;
    // subc : any;
    private sub: any;
    item: IITem;
    id: number;
    constructor(public router: Router, private actRoute: ActivatedRoute,
        private itemService: ItemService, public http: Http) { }
    ngOnInit() {
        // const itemId: number = this.actRoute.snapshot.params['itemId'];
        // alert(itemId);
        // this.sub = this.itemService.getItemById(itemId).subscribe(data => this.item = data);
        
        // this.sub = this.actRoute.params.subscribe(params => {
        //     let id = (params['itemId']);
        //     console.log('getting item with id: ', id);
        //     this.itemService.getItemById(id).subscribe(i => this.item = i);
        // });
        this.id = this.actRoute.snapshot.params["id"];
        console.log(this.id);
        
        this.sub = this.itemService.getItemById(this.id).subscribe(data=>this.item=data);
        console.log(this.item);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    // getItemDetail(id: number){
    //     alert("hi");
    //     this.subc = this.itemService.getItemById(id).subscribe(data => this.items = data);
    // } 
}

