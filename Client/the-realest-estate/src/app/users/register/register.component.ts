import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

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
  constructor(
    private apiService: ApiService, 
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(4)]]
  },{validators: passwordMatchValidator});

  handleSubmit() {
    const userData = {
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      repeatPassword: this.registerForm.get('repeatPassword')?.value,
    }

    this.apiService.registerUser(userData);
    this.authService.isLoggedIn = true;
  }
}
