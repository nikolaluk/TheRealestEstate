import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: string | null | undefined;
  userId: string | null | undefined;
  listings: any[] | undefined;

  constructor(private apiService: ApiService, private router: Router, public loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader();

    this.email = localStorage.getItem('email');
    this.userId = localStorage.getItem('_id')
    
    this.apiService.getProfileListings(this.userId)
      .subscribe(
        (data) => {
          this.listings = data;
          this.loaderService.hideLoader();
        },
        (err) => {
          console.log(err);
          
          this.router.navigate(['404'])
        }
        );      
  }
}
