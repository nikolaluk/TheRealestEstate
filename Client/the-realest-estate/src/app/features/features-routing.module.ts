import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { AddComponent } from './add/add.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';

const routes: Routes = [
    //features
    { path: '', component: HomeComponent },

    {
        path: 'buy',
        children: [
            { path: '', component: BuyComponent },
            { path: ':buyId', component: BuyDetailsComponent }
        ]
    },

    {
        path: 'rent',
        children: [
            { path: '', component: RentComponent},
            { path: ':rentId', component: RentDetailsComponent }
        ]
    },

    { path: 'add', component: AddComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
