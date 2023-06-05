import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      console.log(this.authService.isLoggedInValue)
    if (this.authService.isLoggedInValue) {
      console.log('esto entra aqui guard')
      return true;
    } else {
      // Redireccionar al usuario a la página de inicio de sesión

      return this.router.parseUrl('/login');
    }
  }
}