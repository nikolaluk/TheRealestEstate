import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  errorMessage: string | undefined;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder,

    private router: Router,
  ) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  handleSubmit() {
    const userData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }

    this.apiService.loginUser(userData)
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
