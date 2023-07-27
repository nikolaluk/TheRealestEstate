import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Rent } from 'src/app/types/Rent';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit{
  rents: Rent[] = [];

  constructor(private apiService: ApiService, private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader();

    this.apiService.getAllRentouts().subscribe((data) => {      
      this.rents = data;
      this.loaderService.hideLoader();
    })
  }
}
