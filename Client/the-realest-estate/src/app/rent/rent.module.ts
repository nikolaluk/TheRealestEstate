import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RentRoutingModule } from './rent-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RentComponent } from './rent/rent.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';



@NgModule({
  declarations: [
    RentComponent,
    RentDetailsComponent,
    RentEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RentRoutingModule,
    SharedModule,
  ]
})
export class RentModule { }
