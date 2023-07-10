import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private apiService: ApiService, private authService: AuthService) {}

  submitLogin(email: HTMLInputElement, password: HTMLInputElement) {
    const userData = {
      email: email.value,
      password: password.value}

    this.apiService.loginUser(userData);
    this.authService.isLoggedIn = true;
  }
}
