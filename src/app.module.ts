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
import { Hamada2Component } from './hamada2/hamada2.component';

=======
import { Header } from './header';
import {Footer} from './footer';
>>>>>>> 78951647c47eb2bd2c270b6173ca3847ced98278
import { routes } from './app.routes';

@NgModule({
  bootstrap: [App],
  declarations: [
<<<<<<< HEAD
    Home, Login, Signup, App , Hamada , Hamada2Component
=======
    Home, Login, Signup, App , Header , Footer
>>>>>>> 78951647c47eb2bd2c270b6173ca3847ced98278
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
