import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';
// Components
import { App } from './app';
import { HomeComponent } from './home';
import { Signup } from './signup';
import { OperationsComponent } from './home/operations/operations.component';
import { ItemsComponent } from './items/item.component';
import { DetailComponent } from './item details/detail.component';
import { PeopleTalkComponent } from './home/peopleTalk/peopleTalk.component';
import { SiteDescComponent } from './home/siteDescription/siteDesc.component';
import { Header } from './header';
import { Footer } from './footer';
import { ProfileComponent } from './profile';
import { ToolCategory } from './toolCategory';
import { Needs } from './needs';

import { routes } from './app.routes';

//----------------------Services--------------------------

import { NeedsService } from './services/needs.service';
import { ItemService } from './services/item.service';
import { LocationService } from './services/location.service';
import { ProfileService}  from './services/profile.service';



@NgModule({
  bootstrap: [App],
  declarations: [ 
    HomeComponent, Signup, App, OperationsComponent, Header, PeopleTalkComponent,
    Footer, ProfileComponent, ToolCategory, Needs, ItemsComponent, DetailComponent,   
    SiteDescComponent ],
  imports: [
    HttpModule, BrowserModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,NeedsService,ProfileService,ItemService, LocationService , ...AUTH_PROVIDERS
  ]
})
export class AppModule {}
