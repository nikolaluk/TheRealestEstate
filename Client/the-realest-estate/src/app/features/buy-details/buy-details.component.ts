import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-buy-details',
  templateUrl: './buy-details.component.html',
  styleUrls: ['./buy-details.component.css']
})
export class BuyDetailsComponent implements OnInit {
  estate: Estate | undefined;
  pricePerSquare: string | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getOneEstate(params['buyId']).subscribe(data => {
        this.estate = data;
        this.pricePerSquare = (Number(this.estate?.price) / Number(this.estate?.area)).toFixed(2);
      })
    })
  }
}
