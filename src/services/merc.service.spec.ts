import { TestBed } from '@angular/core/testing';

import { MercService } from './merc.service';

describe('MercService', () => {
  let service: MercService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
