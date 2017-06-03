import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./toolCategory.css');
const template = require('./toolCategory.html');

@Component({
 //moduleId:module.id,
  selector: 'toolCategory',
  template: template,
  styles: [ styles ]
})
export class ToolCategory {
    constructor(public router: Router) {}
}
