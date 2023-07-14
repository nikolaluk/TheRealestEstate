import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _isLoggedIn: boolean = localStorage["accessToken"] ? true : false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn (value:boolean) {
    this._isLoggedIn = value;
  }
}
