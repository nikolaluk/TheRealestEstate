import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEditComponent } from './buy-edit.component';

describe('BuyEditComponent', () => {
  let component: BuyEditComponent;
  let fixture: ComponentFixture<BuyEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyEditComponent]
    });
    fixture = TestBed.createComponent(BuyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
