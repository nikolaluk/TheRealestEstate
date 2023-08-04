import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
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

  showPopup: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

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
          console.log(data);
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
  }
}
