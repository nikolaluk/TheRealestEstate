import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentoutComponent } from './rentout.component';

describe('RentoutComponent', () => {
  let component: RentoutComponent;
  let fixture: ComponentFixture<RentoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentoutComponent]
    });
    fixture = TestBed.createComponent(RentoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
