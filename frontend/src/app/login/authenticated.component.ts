import { AuthenticationService } from '../_services/authentication.service';
import { AuthGuard } from '../_services/auth.guard';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html'
})
export class AuthenticatedComponent implements OnInit {
  isAuthenticated: boolean;
  @Input() userEmail: string;

  constructor(
    private authenticationService: AuthenticationService,
    private authGuard: AuthGuard,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authGuard.isLoggedIn();
    // console.log(this.userEmail);
  }

  logout() {
    this.authenticationService.logout();
    this.isAuthenticated = this.authGuard.isLoggedIn();
    this.router.navigate(['']);
  }
}
