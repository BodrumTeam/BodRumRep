import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Profile } from './profile';
import { ToolCategory } from './toolCategory';
import { AuthGuard } from './common/auth.guard';
import { Needs } from './needs';


export const routes: Routes = [
  { path: '',  component: Login },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'profile',  component: Profile },
  { path: 'toolCategory',  component: ToolCategory },
  {path:'needs',component:Needs},
  { path: '**',     component: Login }
];
