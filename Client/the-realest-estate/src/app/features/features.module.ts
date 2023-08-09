import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RentComponent } from '../rent/rent/rent.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesRoutingModule } from './features-routing.module';
import { RentDetailsComponent } from '../rent/rent-details/rent-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RentEditComponent } from '../rent/rent-edit/rent-edit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FeaturesRoutingModule,
    SharedModule,
  ],
})

export class FeaturesModule { }
