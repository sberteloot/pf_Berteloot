import { TestBed } from '@angular/core/testing';

import { StudentsmockService } from './studentsmock.service';

describe('StudentsmockService', () => {
  let service: StudentsmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
