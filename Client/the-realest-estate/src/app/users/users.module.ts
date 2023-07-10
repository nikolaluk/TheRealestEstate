import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class UsersModule { }
