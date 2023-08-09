import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Rent } from 'src/app/types/Rent';

@Component({
  selector: 'app-rent-edit',
  templateUrl: './rent-edit.component.html',
  styleUrls: ['./rent-edit.component.css']
})

export class RentEditComponent implements OnInit{
  rent: Rent | undefined;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,

    private router: Router,
  ) { }

  sellForm = this.formBuilder.group({
    type: ['', [Validators.required]],
    location: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    area: ['', [Validators.required]],
    description: ['', [Validators.required]],
    rent: ['', [Validators.required]],
  });

  handleSubmit() {
    const estateData = {
      type: this.sellForm.get('type')?.value,
      location: this.sellForm.get('location')?.value,
      imageUrl: this.sellForm.get('imageUrl')?.value,
      description: this.sellForm.get('description')?.value,
      area: Number(this.sellForm.get('area')?.value),
      rent: Number(this.sellForm.get('rent')?.value),
      ownerId: localStorage.getItem('_id'),
    }

    this.apiService.editRent(this.rent?._id, estateData).subscribe();
    this.router.navigate([`rent/${this.rent?._id}`]);
  }

  ngOnInit(): void {    
    this.activeRoute.params.subscribe(
      (data) => {
        this.apiService.getOneRentout(data['rentId']).subscribe(
          (data) => {            
            this.rent = data;
            this.sellForm.setValue({
              type: this.rent.type,
              location: this.rent.location,
              imageUrl: this.rent.imageUrl,
              description: this.rent.description,
              area: this.rent.area.toString(),
              rent: this.rent.rent.toString(),
            })
          },
          (err) => {
            console.log(err);
          }
        )
      }
    )
  }
}
