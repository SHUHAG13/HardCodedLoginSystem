import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../login-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,CommonModule],
templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  router=inject(Router);
  loginService=inject(LoginService);
  loggedIn$ = this.loginService.loggedIn$;

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
