import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder,

    private router: Router,
  ) {}

  sellForm = this.formBuilder.group({
    type: ['',[Validators.required]],
    location: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    area: ['', [Validators.required]],
    description: ['',[Validators.required]],
    price: ['', [Validators.required]],
  });

  handleSubmit(){
    const estateData = {
      type: this.sellForm.get('type')?.value,
      location: this.sellForm.get('location')?.value,
      imageUrl: this.sellForm.get('imageUrl')?.value,
      description: this.sellForm.get('description')?.value,
      area: this.sellForm.get('area')?.value,
      price: Number(this.sellForm.get('price')?.value),
    }

    this.apiService.createEstate(estateData);
    this.router.navigate(['buy']);
  }
}
