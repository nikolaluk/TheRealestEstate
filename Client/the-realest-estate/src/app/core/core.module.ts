import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
  ]
})
export class CoreModule { }
