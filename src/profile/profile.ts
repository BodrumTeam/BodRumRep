import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./profile.css');
const template = require('./profile.html');

@Component({
 //moduleId:module.id,
  selector: 'profile',
  template: template,
  styles: [ styles ]
})
export class Profile {
    constructor(public router: Router) {}
}
