import { TestBed, inject } from '@angular/core/testing';

import { ContractEntitiesService } from './contract-entities.service';

describe('ContractEntitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractEntitiesService]
    });
  });

  it('should be created', inject([ContractEntitiesService], (service: ContractEntitiesService) => {
    expect(service).toBeTruthy();
  }));
});
