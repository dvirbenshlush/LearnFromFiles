import { computed, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.authService.isLoggedIn;

    if (isPlatformBrowser(this.platformId)) {
      const sessionStorageLoggedIn = sessionStorage?.getItem('isLoggedIn');
      if (isLoggedIn || sessionStorageLoggedIn) {
        console.log('can activate true');
        return true;
      }
    }
    console.log('can activate false');
    return this.router.navigateByUrl('login');
  }
}

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  const isLoggedIn = authService.isLoggedIn;

  if (isPlatformBrowser(platformId)) {
    const sessionStorageLoggedIn = sessionStorage?.getItem('isLoggedIn');
    if (isLoggedIn || sessionStorageLoggedIn) {
      console.log('can activate true');
      return true;
    }
  }

  console.log('can activate false');
  router.navigate(['/login']);
  return false;
};
