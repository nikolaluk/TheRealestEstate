import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-popup',
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.css']
})

export class ContactPopupComponent {
  @Input() email: string | undefined;
  @Output() close = new EventEmitter<void>();

  closePopup(): void {
    this.close.emit();
  }
}
