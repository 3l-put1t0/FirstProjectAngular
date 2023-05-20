import { TestBed } from '@angular/core/testing';

import { StudentJsonDataService } from './student-json-data.service';

describe('StudentJsonDataService', () => {
  let service: StudentJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
