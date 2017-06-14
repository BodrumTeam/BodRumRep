import { Component } from '@angular/core';
import { Router } from '@angular/router';

// const styles = require('./operations.component.css');
const styles = require('../home.css');
const template = require('./operations.component.html');

@Component({
 //moduleId:module.id,
  selector: 'pm-operations',
  template: template,
  styles: [ styles ]
})
export class OperationsComponent {
    constructor(public router: Router) {}
}
