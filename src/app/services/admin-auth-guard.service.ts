import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor( 
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate(){
      let user = this.authService.currentUser;
      // if(user && user.admin) return true;
      if(user) return true;
      // if (this.authService.currentUser.admin) return true;

      this.router.navigate(['/no-access']);
      return false;
    }
}
