import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPartnerTypeComponent } from './combo-partner-type.component';

describe('ComboPartnerTypeComponent', () => {
  let component: ComboPartnerTypeComponent;
  let fixture: ComponentFixture<ComboPartnerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPartnerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPartnerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
