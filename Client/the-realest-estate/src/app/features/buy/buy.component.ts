import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{
  estates: Estate[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllEstatesForSale().subscribe((data) => {
      this.estates = data;
    });
  }
}
