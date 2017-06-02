import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { App } from './app';
<<<<<<< HEAD
import { Hamada } from './hamada';
import { OperationsComponent } from './home/operations/operations.component';
=======

import { Header } from './header';
import {Footer} from './footer';
import {Profile} from './profile';
>>>>>>> 843bfb544abaa8c24e6d339a16b9e6bcb6e22498

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
<<<<<<< HEAD
    Home, Login, Signup, App , Hamada, OperationsComponent
=======
    Home, Login, Signup, App , Header , Footer , Profile
>>>>>>> 843bfb544abaa8c24e6d339a16b9e6bcb6e22498
  ],

  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard, ...AUTH_PROVIDERS
  ]
})
export class AppModule {}
