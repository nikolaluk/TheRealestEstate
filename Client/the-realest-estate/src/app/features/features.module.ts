import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    BuyComponent,
    RentComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    BuyComponent,
    RentComponent,
    AddComponent,
  ]
})
export class FeaturesModule { }
