import { Routes } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './signup';
import { Header } from './header';
<<<<<<< HEAD
import{ItemsComponent} from'./items/item.component'
import{DetailComponent} from'./item details/detail.component'

import { Footer } from './footer';
=======
import { Footer } from './footer';
import { Profile } from './profile';
import { ToolCategory} from './toolCategory'
>>>>>>> fc5a46e19821a49344321896880b390b06dd8fab
import { AuthGuard } from './common/auth.guard';
import{Needs} from './needs';

export const routes: Routes = [
  { path: '',       component: Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'header',   component: Header },
  { path: 'items',   component:ItemsComponent },
  { path: 'detail',   component:DetailComponent },  
  { path: 'footer',   component: Footer },
  { path: 'profile',  component: Profile },
  { path: 'toolCategory',  component: ToolCategory },
  {path:'needs',component:Needs},
  { path: '**',     component: Login },
];
