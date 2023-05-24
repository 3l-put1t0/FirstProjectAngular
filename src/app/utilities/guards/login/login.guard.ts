import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueoService } from '../../services/logueo/logueo.service';
import { LogoutService } from '../../services/logout/logout.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private logueService: LogueoService,
              private router: Router,
              private logOutService: LogoutService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(!this.logueService.getConfirmSession() || this.logOutService.getOutSession()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
