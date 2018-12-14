import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    const model = {
      name: this.signUpForm.controls.name.value,
      email: this.signUpForm.controls.email.value,
      password: this.signUpForm.controls.password.value
    };

    if (!this.signUpForm.valid && this.loading) {
      return;
    }

    this.loading = true;

    this.authService.registration(model).subscribe(
      data => {
        alert('Tu usuario ha sido creado con exito. Ya puedes utilizar la plataforma.');
        this.router.navigate(['/signin']);
      }, error => {
        alert(error);
        this.loading = false;
      }
    );
  }

}
