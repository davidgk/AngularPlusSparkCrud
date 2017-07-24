import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBillingStatusComponent } from './combo-billing-status.component';

describe('ComboBillingStatusComponent', () => {
  let component: ComboBillingStatusComponent;
  let fixture: ComponentFixture<ComboBillingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboBillingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBillingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
