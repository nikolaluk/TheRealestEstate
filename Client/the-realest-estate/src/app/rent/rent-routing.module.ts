import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { RentComponent } from './rent/rent.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';

const routes: Routes = [
    {
        path: 'rent',
        children: [
            { path: '', component: RentComponent},
            { path: ':rentId', children: [
                {path: '', component: RentDetailsComponent},
                {path: 'edit', canActivate: [AuthGuard],component: RentEditComponent},
            ] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RentRoutingModule { }
