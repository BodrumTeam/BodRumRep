import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./needs.css');
const template = require('./needs.html');

@Component({
 //moduleId:module.id,
  selector: 'needs',
  template: template,
  styles: [ styles ]
})
export class Needs {
    constructor(public router: Router) {}
}
