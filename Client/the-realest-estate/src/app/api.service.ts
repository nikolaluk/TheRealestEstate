import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Estate } from './types/Estate';
import { Rent } from './types/Rent';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {    
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/register`,userData);
  }

  loginUser(userData: any) {
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/login`,userData);
  }

  getProfileListings(userId: string | null){
    const { appUrl } = environment;
    return this.http.get<any[]>(`${appUrl}/users/${userId}`);
  }

  createEstate(estateData: any) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');
    
    return this.http.post<any>(`${appUrl}/estates`,{estateData,accessToken})
      .subscribe(data => console.log(data));
  }

  createRent(rentData: any) {
    const { appUrl } = environment;

    return this.http.post<any>(`${appUrl}/rents`, rentData)
      .subscribe(data => console.log(data));
  }

  getAllEstates(){
    const { appUrl } = environment;
    return this.http.get<Estate[]>(`${appUrl}/estates`);
  }

  getAllRentouts(){
    const { appUrl } = environment;
    return this.http.get<Rent[]>(`${appUrl}/rents`);
  }

  getOneEstate(estateId: string){
    const { appUrl } = environment;
    return this.http.get<Estate>(`${appUrl}/estates/${estateId}`);
  }

  getOneRentout(rentId: string){
    const { appUrl } = environment;
    return this.http.get<Rent>(`${appUrl}/rents/${rentId}`);
  }

  deleteEstate(estateId: string | undefined){
    const { appUrl } = environment;

    return this.http.delete(`${appUrl}/estates/${estateId}`);
  }

  deleteRent(rentId: string | undefined){
    const { appUrl } = environment;
    return this.http.delete(`${appUrl}/rents/${rentId}`);
  }
}
