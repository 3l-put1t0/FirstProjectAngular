import { TestBed } from '@angular/core/testing';

import { CourseDataJsonService } from './course-data-json.service';

describe('CourseDataJsonService', () => {
  let service: CourseDataJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDataJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
