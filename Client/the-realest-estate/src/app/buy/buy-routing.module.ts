import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { BuyComponent } from './buy/buy.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { BuyEditComponent } from './buy-edit/buy-edit.component';

const routes: Routes = [
    {
        path: 'buy',
        children: [
            { path: '', component: BuyComponent },
            { path: ':buyId', children: [
                {path: '', component: BuyDetailsComponent},
                {path: 'edit', canActivate: [AuthGuard],component: BuyEditComponent},
            ] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BuyRoutingModule { }
