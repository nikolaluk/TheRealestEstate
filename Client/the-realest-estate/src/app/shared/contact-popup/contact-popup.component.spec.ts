import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPopupComponent } from './contact-popup.component';

describe('ContactPopupComponent', () => {
  let component: ContactPopupComponent;
  let fixture: ComponentFixture<ContactPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPopupComponent]
    });
    fixture = TestBed.createComponent(ContactPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
