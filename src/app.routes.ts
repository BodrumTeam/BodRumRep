import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Header } from './header';
import { Footer } from './footer';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'header',   component: Header },
  { path: 'footer',   component: Footer },
  { path: '**',     component: Login },
];
