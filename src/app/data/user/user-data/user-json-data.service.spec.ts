import { TestBed } from '@angular/core/testing';

import { UserJsonDataService } from './user-json-data.service';

describe('UserJsonDataService', () => {
  let service: UserJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
