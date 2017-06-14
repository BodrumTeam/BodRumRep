import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [ styles ]
})
export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    //alert(localStorage.getItem('id_token'));
    //this.jwt = localStorage.getItem('id_token');
    //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }
login() {
    this.router.navigate(['login']);
  }
  

}
