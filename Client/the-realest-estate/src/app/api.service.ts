import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { User } from './types/User';
import { Estate } from './types/Estate';
import { Rent } from './types/Rent';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {    
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/register`,userData)
      .subscribe((data) => {
        localStorage.setItem('_id', data._id);
        localStorage.setItem('email',data.email);
        localStorage.setItem('accessToken', data.accessToken)
      });
  }

  loginUser(userData: any) {
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/login`,userData)
      .subscribe((data) => {
        localStorage.setItem('_id', data._id);
        localStorage.setItem('email',data.email);
        localStorage.setItem('accessToken', data.accessToken)
      });
  }

  createEstate(estateData: any) {
    const { appUrl } = environment;
    
    return this.http.post<any>(`${appUrl}/estates`,estateData)
      .subscribe(data => console.log(data));
  }

  createRent(rentData: any) {
    const { appUrl } = environment;

    return this.http.post<any>(`${appUrl}/rents`, rentData)
      .subscribe(data => console.log(data));
  }

  getAllEstatesForSale(){
    const { appUrl } = environment;
    return this.http.get<Estate[]>(`${appUrl}/estates`);
  }

  getAllRentouts(){
    const { appUrl } = environment;
    return this.http.get<Rent[]>(`${appUrl}/rents`);
  }
}