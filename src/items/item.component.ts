import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
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
export class ItemsComponent {
    constructor(public router: Router) {}

   // ngAfterViewInit(){  }
}
