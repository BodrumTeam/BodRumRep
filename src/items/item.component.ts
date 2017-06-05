import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./item.component.css');
const template = require('./item.component.html');

@Component({
 //moduleId:module.id,
  selector: 'items',
  template: template,
  styles: [ styles ]
})
export class ItemsComponent {
    constructor(public router: Router) {}
}
