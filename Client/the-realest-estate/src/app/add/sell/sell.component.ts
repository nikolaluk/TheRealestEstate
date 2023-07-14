import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  constructor(
    private apiService: ApiService, 
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  sellForm = this.formBuilder.group({
    location: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  handleSubmit(){
    const estateData = {
      location: this.sellForm.get('location')?.value,
      imageUrl: this.sellForm.get('imageUrl')?.value,
      price: Number(this.sellForm.get('price')?.value),
    }

    this.apiService.createEstate(estateData);
  }
}
