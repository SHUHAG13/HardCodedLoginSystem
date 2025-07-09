import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../login-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
 router=inject(Router);
 loginService=inject(LoginService);
 loggedIn$ = this.loginService.loggedIn$;

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }
}
