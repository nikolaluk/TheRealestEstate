import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SellComponent } from './sell/sell.component';
import { AddRoutingModule } from './add-routing.module';
import { RentoutComponent } from './rentout/rentout.component';



@NgModule({
  declarations: [
    SellComponent,
    RentoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddRoutingModule,
  ]
})
export class AddModule { }
