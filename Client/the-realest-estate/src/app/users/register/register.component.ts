import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

// Custom validator function
const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');

  if (password?.value !== repeatPassword?.value) {
    return { 'passwordMismatch': true };
  }

  return null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  errorMessage: string | undefined;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder,

    private router: Router,
  ) { }

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(4)]]
  }, { validators: passwordMatchValidator });

  handleSubmit() {
    const userData = {
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      repeatPassword: this.registerForm.get('repeatPassword')?.value,
    }

    this.apiService.registerUser(userData)
      .subscribe(
        (data) => {
        localStorage.setItem('_id', data._id);
        localStorage.setItem('email', data.email);
        localStorage.setItem('accessToken', data.accessToken)

        this.authService.isLoggedIn = true;
        this.router.navigate(['']);
        },
        (err) => {
          this.errorMessage = err.error.message;
        });
  }
}
