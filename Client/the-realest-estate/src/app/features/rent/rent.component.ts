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
  noRents: boolean = false;


  constructor(private apiService: ApiService, private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader();

    this.apiService.getAllRentouts().subscribe((data) => {      
      this.rents = data;
      if(!this.rents[0]){
        this.noRents = true;
      }
      this.loaderService.hideLoader();
    })
  }
}
