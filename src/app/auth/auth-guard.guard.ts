import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  user = Auth;
  constructor(private router: Router) {}
  canActivate(): false | Promise<boolean> {
    try {
      return this.user.currentAuthenticatedUser().then(
        () => {
          return true;
        },
        () => {
          // not logged in so redirect to login page with the return url
          void this.router.navigate(['login']);
          return false;
        }
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
