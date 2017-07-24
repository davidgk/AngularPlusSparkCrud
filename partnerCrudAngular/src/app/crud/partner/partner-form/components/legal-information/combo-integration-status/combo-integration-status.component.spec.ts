import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboIntegrationStatusComponent } from './combo-integration-status.component';

describe('ComboIntegrationStatusComponent', () => {
  let component: ComboIntegrationStatusComponent;
  let fixture: ComponentFixture<ComboIntegrationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboIntegrationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboIntegrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
