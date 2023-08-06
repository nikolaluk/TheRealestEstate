import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Estate } from '../types/Estate';
import { Rent } from '../types/Rent';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/register`, userData);
  }

  loginUser(userData: any) {
    const { appUrl } = environment;
    return this.http.post<any>(`${appUrl}/users/login`, userData);
  }

  getProfileListings(userId: string | null) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.get<any>(`${appUrl}/users/${userId}`, {headers});
  }

  addBookmark(estateId: string | undefined) {    
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })
    
    return this.http.post<any>(`${appUrl}/users/${userId}`, {estateId}, {headers});
  }

  removeBookmark(estateId: string | undefined) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('_id');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.put<any>(`${appUrl}/users/${userId}`, {estateId}, {headers});
  }

  createEstate(estateData: any) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.post<any>(`${appUrl}/estates`, estateData, { headers })
      .subscribe(data => console.log(data));
  }

  createRent(rentData: any) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.post<any>(`${appUrl}/rents`, rentData, { headers })
      .subscribe(data => console.log(data));
  }

  getAllEstates() {
    const { appUrl } = environment;
    return this.http.get<Estate[]>(`${appUrl}/estates`);
  }

  getAllRentouts() {
    const { appUrl } = environment;
    return this.http.get<Rent[]>(`${appUrl}/rents`);
  }

  getOneEstate(estateId: string) {
    const { appUrl } = environment;
    return this.http.get<Estate>(`${appUrl}/estates/${estateId}`);
  }

  getOneRentout(rentId: string) {
    const { appUrl } = environment;
    return this.http.get<Rent>(`${appUrl}/rents/${rentId}`);
  }

  deleteEstate(estateId: string | undefined) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.delete<any>(`${appUrl}/estates/${estateId}`, { headers });
  }

  deleteRent(rentId: string | undefined) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.delete(`${appUrl}/rents/${rentId}`, { headers });
  }

  editEstate(estateId: string | undefined, estateData: any) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.put(`${appUrl}/estates/${estateId}`, estateData, { headers });
  }

  editRent(rentId: string | undefined, rentData: any) {
    const { appUrl } = environment;
    const accessToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Authorization': accessToken || '',
    })

    return this.http.put(`${appUrl}/rents/${rentId}`, rentData, { headers });
  }
}
