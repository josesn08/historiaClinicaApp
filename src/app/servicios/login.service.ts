import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { Usuario } from '../models/usuario';
import { Observable, of, throwError } from 'rxjs';
import { usuarioRegistrado} from '../util/usuariosRegistrados'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  public login( credenciales:{username:string, password:string}): Observable<Usuario> {
    // TODO: Implementar el login a través del backend
    const result = usuarioRegistrado.filter( u => u.username == credenciales.username )[0];
    if(result && result.password == credenciales.password) {
      localStorage.setItem('usuario-actual', credenciales.username);
      return of(result);
    }
    return throwError(() => new Error('Credenciales Incorrectas'))

  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public usuarioActual(): string | null {
    return localStorage.getItem('usuario-actual');
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }
}
