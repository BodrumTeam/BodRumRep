import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('../items/item.component.css');
const template = require('./detail.component.html');

@Component({
 //moduleId:module.id,
  selector: 'detail',
  template: template,
  styles: [ styles ]
})
export class DetailComponent {
    constructor(public router: Router) {}
}
