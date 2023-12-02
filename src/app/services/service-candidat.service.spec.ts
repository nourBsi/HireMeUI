import { TestBed } from '@angular/core/testing';

import { ServiceCandidatService } from './service-candidat.service';

describe('ServiceCandidatService', () => {
  let service: ServiceCandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
