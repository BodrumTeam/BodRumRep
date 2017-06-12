import { Component } from '@angular/core';
import { Router } from '@angular/router';

const styles = require('./siteDesc.component.css');
const template = require('./siteDesc.component.html');

@Component ({
    selector: 'pm-siteDesc',
    template: template,
    styles: [styles]
})
export class SiteDescComponent {
     constructor(public router: Router) {}
}