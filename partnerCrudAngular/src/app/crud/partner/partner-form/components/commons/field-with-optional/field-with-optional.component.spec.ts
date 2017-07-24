import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWithOptionalComponent } from './field-with-optional.component';

describe('FieldWithOptionalComponent', () => {
  let component: FieldWithOptionalComponent;
  let fixture: ComponentFixture<FieldWithOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldWithOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldWithOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
