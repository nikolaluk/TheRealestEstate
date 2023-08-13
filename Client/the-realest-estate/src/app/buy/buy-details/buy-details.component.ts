import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.component.html',
  styleUrls: ['./buy-details.component.css']
})
export class BuyDetailsComponent implements OnInit {
  estate: Estate | undefined;
  pricePerSquare: string | undefined;
  isOwner: boolean | undefined;

  bookmarked: boolean = false;
  showPopup: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router, public authService: AuthService) { }

  deleteEstate(): void {
    this.apiService.deleteEstate(this.estate?._id)
      .subscribe(
        (data) => {
          this.router.navigate(['buy']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  bookmark(): void {
    this.apiService.addBookmark(this.estate?._id.toString())
      .subscribe(
        (data) => {
          this.bookmarked = true;
        },
        (err) => {
          console.log(err.error.message);
        }
      );
  }

  unbookmark(): void {
    this.apiService.removeBookmark(this.estate?._id.toString())
      .subscribe(
        (data) => {          
          this.bookmarked = false;
        },
        (err) => {
          console.log(err.error.message);
        }
      );

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getOneEstate(params['buyId']).subscribe(data => {
        this.estate = data;
        this.pricePerSquare = (Number(this.estate?.price) / Number(this.estate?.area)).toFixed(2);
        this.isOwner = localStorage.getItem('_id') == this.estate.ownerId;
      })
    });

    this.apiService.getProfileListings(localStorage.getItem('_id'))
      .subscribe(
        (data) => {  
          for(let bookmark of data.bookmarks) {
            if(bookmark._id == this.estate?._id) {
              this.bookmarked = true;
              console.log(this.bookmarked);
              
            }
          }
        },
        (err) => {
          console.log(err.error.message);
        },
      )
  }
}
