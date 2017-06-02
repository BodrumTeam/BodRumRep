import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./header.css');
const template = require('./header.html');

@Component({
 //moduleId:module.id,
  selector: 'header',
  template: template,
  styles: [ styles ]
})
export class Header {
    constructor(public router: Router) {}
}
