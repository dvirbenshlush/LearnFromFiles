import { computed, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  // console.log('guard called');
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn || (sessionStorage && sessionStorage?.getItem('isLoggedIn'))) {
          console.log('can activate true');
          return true;
        } else {
          console.log('can activate false');
          return this.router.navigateByUrl('login');
      }
  }
  
};

export const canActivateGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
   state: RouterStateSnapshot
   ) => {
  if(inject(AuthService).isLoggedIn || (sessionStorage && sessionStorage?.getItem('isLoggedIn'))) {
    // inject(Router).navigate(['/home']);
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
}
