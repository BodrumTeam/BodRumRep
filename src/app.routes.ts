import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
<<<<<<< HEAD
import { Hamada } from './hamada';
import { Hamada2Component } from './hamada2/hamada2.component';
=======
import { Header } from './header';
import { Footer } from './footer';

>>>>>>> 78951647c47eb2bd2c270b6173ca3847ced98278
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
<<<<<<< HEAD
  { path: 'hamada',   component: Hamada },
  { path: 'hamada2',   component: Hamada2Component },
=======
  { path: 'header',   component: Header },
  { path: 'footer',   component: Footer },
>>>>>>> 78951647c47eb2bd2c270b6173ca3847ced98278
  { path: '**',     component: Login },
];
