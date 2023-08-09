import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { RentoutComponent } from './rentout/rentout.component';
import { NotFoundComponent } from '../features/not-found/not-found.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
    {path: 'sell', canActivate: [AuthGuard], component: SellComponent},
    {path: 'rentout', canActivate: [AuthGuard],component: RentoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddRoutingModule { }
