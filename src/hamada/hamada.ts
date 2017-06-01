import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./hamada.css');
const template = require('./hamada.html');

@Component({
 //moduleId:module.id,
  selector: 'hamada',
  template: template,
  styles: [ styles ]
})
export class Hamada {
    constructor(public router: Router) {}
}
