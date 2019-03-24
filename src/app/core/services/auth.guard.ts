import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  // Singleton. Questo metodo verrà attivato ogni volta che accediamo alla route dov'è inserita la regola
  canActivate() {
    const isAuth = this.auth.isLogged();

    // se non loggato
    if (!isAuth) {
      this.router.navigateByUrl('login');
    }

    // se ritorno false, la guardia bloccherà il path
    return isAuth;
  }
}
