import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormSimpleComponent } from './persona-form-simple.component';

describe('PersonaFormSimpleComponent', () => {
  let component: PersonaFormSimpleComponent;
  let fixture: ComponentFixture<PersonaFormSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
