import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyComponent } from './buy/buy.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { BuyEditComponent } from './buy-edit/buy-edit.component';
import { RouterModule } from '@angular/router';
import { BuyRoutingModule } from './buy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuyComponent,
    BuyDetailsComponent,
    BuyEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BuyRoutingModule,
    SharedModule,
  ]
})
export class BuyModule { }
