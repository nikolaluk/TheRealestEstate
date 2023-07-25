import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesRoutingModule } from './features-routing.module';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyEditComponent } from './buy-edit/buy-edit.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';



@NgModule({
  declarations: [
    HomeComponent,
    BuyComponent,
    RentComponent,
    AddComponent,
    BuyDetailsComponent,
    RentDetailsComponent,
    NotFoundComponent,
    BuyEditComponent,
    RentEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FeaturesRoutingModule,
  ],
  exports: [
    HomeComponent,
    BuyComponent,
    RentComponent,
    AddComponent,
    BuyDetailsComponent,
    RentDetailsComponent,
  ]
})
export class FeaturesModule { }
