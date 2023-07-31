import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  estates: Estate[] = [];
  noEstates: boolean = false;

  constructor(private apiService: ApiService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.showLoader();

    this.apiService.getAllEstates().subscribe((data) => {
      this.estates = data;
      if(!this.estates[0]){
        this.noEstates = true;
      }
      this.loaderService.hideLoader();
    });
  }
}
