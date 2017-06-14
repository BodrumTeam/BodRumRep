import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { Signup } from './signup';
import { ProfileComponent } from './profile';
import { Needs } from './needs';
import { ToolCategory } from './toolCategory';
import{ ItemsComponent } from'./items/item.component';
import{ DetailComponent } from'./item details/detail.component';


import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch:"full" ,component: HomeComponent },
  { path: 'signup', component: Signup },
  { path: 'home',   component: HomeComponent },
  { path: 'items',   component: ItemsComponent },
  { path: 'detail',   component: DetailComponent },
  { path: 'profile/:username',  component: ProfileComponent },
  { path: 'toolCategory', component: ToolCategory },
  { path: 'needs', component: Needs},
  { path: '**', component: HomeComponent }
];
