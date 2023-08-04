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

  displayListings: boolean = true;
  listings: any[] = [];
  noListings: boolean = false;

  displayBookmarks: boolean = false;
  bookmarks: any[] = [];
  noBookmarks: boolean = false;

  constructor(private apiService: ApiService, private router: Router, public loaderService: LoaderService) {}

  showListings(): void {
    this.displayBookmarks = false;
    this.displayListings = true;
  }

  showBookmarks(): void {
    this.displayListings = false;
    this.displayBookmarks = true;
  }

  ngOnInit(): void {
    this.loaderService.showLoader();

    this.email = localStorage.getItem('email');
    this.userId = localStorage.getItem('_id');
    
    this.apiService.getProfileListings(this.userId)
      .subscribe(
        (data) => {          
          this.listings = data.listings;
          this.bookmarks = data.bookmarks;

          if(!this.listings[0]){
            this.noListings = true;
          }
          if(!this.bookmarks[0]){
            this.noBookmarks = true;
          }

          this.loaderService.hideLoader();
        },
        (err) => {
          console.log(err);
          
          this.loaderService.hideLoader();
          this.router.navigate(['404'])
        }
        );      
  }
}
