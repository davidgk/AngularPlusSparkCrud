import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBillingEntityComponent } from './combo-billing-entity.component';

describe('ComboBillingEntityComponent', () => {
  let component: ComboBillingEntityComponent;
  let fixture: ComponentFixture<ComboBillingEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboBillingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBillingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
