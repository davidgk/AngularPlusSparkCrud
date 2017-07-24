import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalClientLevelComponent } from './optional-client-level.component';

describe('OptionalClientLevelComponent', () => {
  let component: OptionalClientLevelComponent;
  let fixture: ComponentFixture<OptionalClientLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalClientLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalClientLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
