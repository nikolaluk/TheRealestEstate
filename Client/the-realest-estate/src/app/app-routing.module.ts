import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BuyComponent } from './features/buy/buy.component';
import { RentComponent } from './features/rent/rent.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  //features
  { path: '', component: HomeComponent },
  { path: 'buy', component: BuyComponent},
  { path: 'rent', component: RentComponent},

  //user
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
