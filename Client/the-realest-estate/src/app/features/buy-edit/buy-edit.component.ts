import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Estate } from 'src/app/types/Estate';

@Component({
  selector: 'app-buy-edit',
  templateUrl: './buy-edit.component.html',
  styleUrls: ['./buy-edit.component.css']
})

export class BuyEditComponent implements OnInit {
  estate: Estate | undefined;

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
    price: ['', [Validators.required]],
  });

  handleSubmit() {
    const estateData = {
      type: this.sellForm.get('type')?.value,
      location: this.sellForm.get('location')?.value,
      imageUrl: this.sellForm.get('imageUrl')?.value,
      description: this.sellForm.get('description')?.value,
      area: Number(this.sellForm.get('area')?.value),
      price: Number(this.sellForm.get('price')?.value),
      ownerId: localStorage.getItem('_id'),
    }

    this.apiService.editEstate(this.estate?._id, estateData).subscribe();
    this.router.navigate([`buy/${this.estate?._id}`]);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
        (data) => {
          this.apiService.getOneEstate(data['buyId']).subscribe(
            (data) => {
              this.estate = data;
              this.sellForm.setValue({
                type: this.estate.type,
                location: this.estate.location,
                imageUrl: this.estate.imageUrl,
                description: this.estate.description,
                area: this.estate.area.toString(),
                price: this.estate.price.toString(),
              })
            }
          )
        }
      )
  }
}
