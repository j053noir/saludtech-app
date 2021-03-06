import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  signInForm: FormGroup;
  returnUrl: string;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    const model = {
      email: this.signInForm.controls.email.value,
      password: this.signInForm.controls.password.value
    };

    if (this.signInForm.invalid && this.loading) {
      return;
    }

    this.loading = true;

    this.authService.login(model.email, model.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
          alert('usuario o contraseña incorrectos.');
        }
      );
  }

}
