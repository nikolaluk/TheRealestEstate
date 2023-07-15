import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/Rent';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit{
  rents: Rent[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllRentouts().subscribe((data) => {      
      this.rents = data;
    })
  }
}
