import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _isLoggedIn: boolean = sessionStorage["authToken"] ? true : false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn (value:boolean) {
    this._isLoggedIn = value;
  }
}
