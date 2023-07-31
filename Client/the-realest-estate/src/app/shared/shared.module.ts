import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ContactPopupComponent } from './contact-popup/contact-popup.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ContactPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ContactPopupComponent,
  ]
})
export class SharedModule { }
