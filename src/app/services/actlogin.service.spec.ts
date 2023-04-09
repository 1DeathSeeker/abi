import { TestBed } from '@angular/core/testing';

import { ActloginService } from './actlogin.service';

describe('ActloginService', () => {
  let service: ActloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
