import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { User } from './types/User';
import { Estate } from './types/Estate';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(userData: User) {    
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/register`,userData)
      .subscribe((data) => {
        sessionStorage.setItem('_id', data._id);
        sessionStorage.setItem('email',data.email);
        sessionStorage.setItem('accessToken', data.accessToken)
      });
  }

  loginUser(userData: User) {
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/login`,userData)
      .subscribe((data) => {
        sessionStorage.setItem('_id', data._id);
        sessionStorage.setItem('email',data.email);
        sessionStorage.setItem('accessToken', data.accessToken)
      });
  }

  createEstate(estateData:Estate) {
    const { appUrl } = environment;
    
    return this.http.post<any>(`${appUrl}/estates`,estateData);
  }

  getAllEstatesForSale(){
    const { appUrl } = environment;
    return this.http.get<Estate[]>(`${appUrl}/estates`);
  }
}
