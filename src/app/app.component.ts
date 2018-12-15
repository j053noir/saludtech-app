import { Component } from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authenticated: boolean;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.authenticated.subscribe(a => this.authenticated = a);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
