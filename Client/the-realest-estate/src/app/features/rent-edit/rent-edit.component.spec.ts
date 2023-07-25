import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentEditComponent } from './rent-edit.component';

describe('RentEditComponent', () => {
  let component: RentEditComponent;
  let fixture: ComponentFixture<RentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentEditComponent]
    });
    fixture = TestBed.createComponent(RentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
