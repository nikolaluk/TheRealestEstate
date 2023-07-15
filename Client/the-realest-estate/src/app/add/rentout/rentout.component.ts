import { Component } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder,

    private router: Router,
  ) {}

  rentOutForm = this.formBuilder.group({
    type: ['',[Validators.required]],
    location: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    description: ['',[Validators.required]],
    area: ['', [Validators.required]],
    rent: ['', [Validators.required]],
  });

  handleSubmit(){
    const rentData = {
      type: this.rentOutForm.get('type')?.value,
      location: this.rentOutForm.get('location')?.value,
      imageUrl: this.rentOutForm.get('imageUrl')?.value,
      description: this.rentOutForm.get('description')?.value,
      area: this.rentOutForm.get('area')?.value,
      rent: Number(this.rentOutForm.get('rent')?.value),
    }

    this.apiService.createRent(rentData);
    this.router.navigate(['rent']);
  }
}
