import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/Rent';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit{
  rent: Rent | undefined;
  rentPerSquare: string | undefined;
  isOwner: boolean | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router:Router) {}

  deleteRent():void {
    this.apiService.deleteRent(this.rent?._id)
      .subscribe(
        (data) => {
          this.router.navigate(['rent']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {    
    this.route.params.subscribe(params => {
      this.apiService.getOneRentout(params['rentId']).subscribe(data => {
        this.rent = data;
        this.rentPerSquare = (Number(this.rent?.rent) / Number(this.rent?.area)).toFixed(2);
        this.isOwner = localStorage.getItem('_id') == this.rent.ownerId;
      })
    })
  }
}
