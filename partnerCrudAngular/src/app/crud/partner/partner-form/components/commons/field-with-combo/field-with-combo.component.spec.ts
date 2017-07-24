import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithComboComponent } from './field-with-combo.component';

describe('FieldWithComboComponent', () => {
  let component: FieldWithComboComponent;
  let fixture: ComponentFixture<FieldWithComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldWithComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWithComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
