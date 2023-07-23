import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: string | null | undefined;
  userId: string | null | undefined;
  listings: any[] | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.userId = localStorage.getItem('_id')
    
    this.apiService.getProfileListings(this.userId)
      .subscribe(
        (data) => {this.listings = data},
        // TODO: redirect to 404
        (err) => {this.router.navigate([''])}
        );
  }
}
