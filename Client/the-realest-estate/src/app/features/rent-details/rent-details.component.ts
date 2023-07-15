import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/Rent';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit{
  rent: Rent | undefined;
  rentPerArea: string | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getOneRentout(params['rentId']).subscribe(data => {
        this.rent = data;
        this.rentPerArea = (Number(this.rent?.rent) / Number(this.rent?.area)).toFixed(2);
      })
    })
  }
}
