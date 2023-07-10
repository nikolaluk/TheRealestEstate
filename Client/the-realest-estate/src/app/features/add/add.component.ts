import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private apiService: ApiService) {}

  addEstate(location: HTMLInputElement, imageUrl: HTMLInputElement, price: HTMLInputElement) {
    const estateData: Estate = {
      location: location.value,
      imageUrl: imageUrl.value,
      price: Number(price.value),
    }

    this.apiService.createEstate(estateData);
  }
}
