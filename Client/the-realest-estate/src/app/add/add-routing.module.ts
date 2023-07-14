import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { RentoutComponent } from './rentout/rentout.component';

const routes: Routes = [
    {path: 'sell', component: SellComponent},
    {path: 'rentout', component: RentoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddRoutingModule { }
