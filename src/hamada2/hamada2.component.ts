import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./hamada2.css');
const template = require('./hamada2.html');

@Component({
 //moduleId:module.id,
  selector: 'hamada',
  template: template,
  styles: [ styles ]
})
export class Hamada2Component {
    constructor(public router: Router) {}
}
