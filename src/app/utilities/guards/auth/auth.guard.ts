import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authServices: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authServices.getSession()) {
      this.router.navigate(['login']).then(() => {
        alert('No tienes permisos');        
        return false;
      });
      console.log("GUARD: Estudiante");
      this.authServices.setInicio(0);
      return false;
    }
    console.log("GUARD: Administrador");
    return true;
    //return this.router.navigate(['']).then(() => {alert('No tienes permisos'); return false}); //va el nombre del componente donde se quiere redireccionar
  }

}
