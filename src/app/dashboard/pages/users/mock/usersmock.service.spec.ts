import { TestBed } from '@angular/core/testing';

import { UsersmockService } from './usersmock.service';

describe('UsersmockService', () => {
  let service: UsersmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
