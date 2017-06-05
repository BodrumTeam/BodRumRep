import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';

// Components
import { App } from './app';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { OperationsComponent } from './home/operations/operations.component';
import { Header } from './header';
import {Footer} from './footer';
import {Profile} from './profile';
import {ToolCategory} from './toolCategory';
import { Needs } from './needs';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
    Home, Login, Signup, App, OperationsComponent, 
    Header ,Footer ,Profile, ToolCategory, Needs
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

