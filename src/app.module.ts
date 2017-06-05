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
import{ItemsComponent} from'./items/item.component'
import{DetailComponent} from'./item details/detail.component'

import { App } from './app';

import { Header } from './header';
import {Footer} from './footer';
import {Profile} from './profile';
import {ToolCategory} from './toolCategory';

import { routes } from './app.routes';
import{Needs} from './needs'

@NgModule({
  bootstrap: [App],
  declarations: [
<<<<<<< HEAD
    Home, Login, Signup, App , Header , Footer, ItemsComponent, DetailComponent
=======
    Home, Login, Signup, App , Header , Footer , Profile ,ToolCategory,Needs
>>>>>>> fc5a46e19821a49344321896880b390b06dd8fab
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
