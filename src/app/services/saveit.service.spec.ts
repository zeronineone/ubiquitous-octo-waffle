import { TestBed } from '@angular/core/testing';

import { SaveitService } from './saveit.service';

describe('SaveitService', () => {
  let service: SaveitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
