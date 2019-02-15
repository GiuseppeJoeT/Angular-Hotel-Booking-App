import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent  }, // canActivate: [AuthGuard]
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent }, // canActivate: [AuthGuard]
  { path: '**', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
