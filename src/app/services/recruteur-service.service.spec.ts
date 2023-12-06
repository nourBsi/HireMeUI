import { TestBed } from '@angular/core/testing';

import { RecruteurServiceService } from './recruteur-service.service';

describe('RecruteurServiceService', () => {
  let service: RecruteurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruteurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
