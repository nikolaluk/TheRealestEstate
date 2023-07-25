import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';
import { AddComponent } from './add/add.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { BuyEditComponent } from './buy-edit/buy-edit.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';

const routes: Routes = [
    //features
    { path: '', component: HomeComponent },

    {
        path: 'buy',
        children: [
            { path: '', component: BuyComponent },
            { path: ':buyId', children: [
                {path: '', component: BuyDetailsComponent},
                {path: 'edit', component: BuyEditComponent},
            ] }
        ]
    },

    {
        path: 'rent',
        children: [
            { path: '', component: RentComponent},
            { path: ':rentId', children: [
                {path: '', component:RentDetailsComponent},
                {path: 'edit', component: RentEditComponent},
            ] }
        ]
    },

    { path: 'add', component: AddComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
