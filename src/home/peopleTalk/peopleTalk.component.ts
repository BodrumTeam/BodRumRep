import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./peopleTalk.component.css');
const template = require('./peopleTalk.component.html');

@Component({
    selector: 'pm-talk',
    template: template,
    styles: [styles]
})
export class PeopleTalkComponent {
    constructor(public router: Router) {}
}
