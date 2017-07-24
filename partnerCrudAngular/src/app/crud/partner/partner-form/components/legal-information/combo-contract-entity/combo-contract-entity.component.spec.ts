import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboContractEntityComponent } from './combo-contract-entity.component';

describe('ComboContractEntityComponent', () => {
  let component: ComboContractEntityComponent;
  let fixture: ComponentFixture<ComboContractEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboContractEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboContractEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
