import { TestBed } from '@angular/core/testing';

import { GoodServiceService } from './good-service.service';

describe('GoodServiceService', () => {
  let service: GoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
