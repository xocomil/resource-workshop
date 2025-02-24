import { TestBed } from '@angular/core/testing';

import { TeamNg } from './team.ng';

describe('TeamService', () => {
  let service: TeamNg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamNg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
