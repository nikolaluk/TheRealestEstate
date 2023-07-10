import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private apiService: ApiService, private authService: AuthService) {}

  submitRegistration(email: HTMLInputElement, password: HTMLInputElement, repeatPassword: HTMLInputElement) {
    const userData = {
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value}

    this.apiService.registerUser(userData);
    this.authService.isLoggedIn = true;
  }
}
