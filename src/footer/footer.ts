import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./footer.css');
const template = require('./footer.html');

@Component({
 //moduleId:module.id,
  selector: 'footer',
  template: template,
  styles: [ styles ]
})
export class Footer {
    constructor(public router: Router) {}
}
