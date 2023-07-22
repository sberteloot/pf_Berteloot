import { TestBed } from '@angular/core/testing';

import { CoursesmockService } from './coursesmock.service';

describe('CoursesmockService', () => {
  let service: CoursesmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
