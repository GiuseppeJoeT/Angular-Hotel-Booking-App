import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from './../../model/auth';
import { Router } from '@angular/router';

@Injectable({
  // injector a livello globale
  providedIn: 'root'
})
export class AuthService {
  data: Auth;
  error: any;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {  }

      // GET servizio endpoint Login
      // login(user, pass) {
      //   this.http.get(`http:localhost:4200/login?${user}&${pass}`, { params})

      // login({user, pass}) --> parametri Destructoring
      login({user, pass}) {
        this.error = null;

        const params = new HttpParams()
        .set('user', user)
        .set('pass', pass);

        this.http.get<Auth>(`http://localhost:4200/login`, { params })
        // { params } sugar syntax ---> params: params
          .subscribe(
            res => {
              this.data = res; // data --> name e token
              // redirect dopo login
              this.router.navigateByUrl('search');
        },
          err => this.error = err
        );
      }

    logout() {
        // per rendere false isAuth e non mostrare navbar ( *ngIf="auth.isLogged() )
        this.data = null;
        this.router.navigateByUrl('login');
      }

    // controllo se autenticato
    isLogged() {
      // se il token esiste, ritorna true o false, se abbiamo un token e non è null siamo loggati
      // se esiste this.data, analizza quello che segue
      const isAuth = this.data && this.data.token ? true : false;
      // TS trick, casting --> !! se stringa viene tradotto in booleano
      // const isAuth = !!this.data.token;

      return isAuth;
    }


} // class
