import { Component , OnInit  , OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

const styles = require('./header.css');
const template = require('./header.html');

@Component({
 selector: 'header',
  template: template,
  styles: [ styles ]
})
export class Header  {
    public userLoged: boolean ;
    curUsername : string;
    constructor(private router: Router , private http : Http  ) {
      if(localStorage.getItem('username') != undefined)
      {
        this.curUsername = localStorage.getItem('username') ;
        this.userLoged = true;
      }
    }

    login(event, username, password) 
    {
        event.preventDefault();
        let body = JSON.stringify({ username, password });       
        this.http.post('http://localhost:7919/rpc/account/login', body, { headers: contentHeaders })
          .subscribe(
            response => {
            localStorage.setItem('id_token', response.json().id_token);
            localStorage.setItem('username', username);
            this.curUsername = username;
            this.userLoged = true;            
            this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
   logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('username');
        this.userLoged = false;
        this.router.navigate(['home']);
    }
}
