import { Component } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';

import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rentout',
  templateUrl: './rentout.component.html',
  styleUrls: ['./rentout.component.css']
})
export class RentoutComponent {
  constructor(
    private apiService: ApiService, 
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  rentOutForm = this.formBuilder.group({
    location: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    rent: ['', [Validators.required]],
  });

  handleSubmit(){
    const rentData = {
      location: this.rentOutForm.get('location')?.value,
      imageUrl: this.rentOutForm.get('imageUrl')?.value,
      rent: Number(this.rentOutForm.get('rent')?.value),
    }

    this.apiService.createRent(rentData);
  }
}
