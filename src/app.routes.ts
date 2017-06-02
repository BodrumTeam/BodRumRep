import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Header } from './header';
import { Footer } from './footer';
import { Profile } from './profile';

import { AuthGuard } from './common/auth.guard';
import { OperationsComponent } from './home/operations/operations.component';

export const routes: Routes = [
  { path: '',  component: Login },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
<<<<<<< HEAD
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'hamada', component: Hamada },
  { path: 'pm-operations', component: OperationsComponent },
  { path: '**', component: Login },
=======
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'header',   component: Header },
  { path: 'footer',   component: Footer },
  { path: 'profile',  component: Profile },
  { path: '**',     component: Login },
>>>>>>> 843bfb544abaa8c24e6d339a16b9e6bcb6e22498
];
