import { Component, Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,

} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.css']
})

@Injectable({ providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.currentUser.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;

        if (isAuth) return true;
        if (!isAuth) return this.router.createUrlTree(["auth"]);
      })
    );
  }
}
