import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormReactiveComponent } from './persona-form-reactive.component';

describe('PersonaFormReactiveComponent', () => {
  let component: PersonaFormReactiveComponent;
  let fixture: ComponentFixture<PersonaFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
