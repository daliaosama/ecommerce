import { TestBed } from '@angular/core/testing';

import { ProudctApiService } from './proudct-api.service';

describe('ProudctApiService', () => {
  let service: ProudctApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProudctApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
