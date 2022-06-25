import { TestBed } from '@angular/core/testing';

import { ParticlesBgService } from './particles-bg.service';

describe('ParticlesBgService', () => {
  let service: ParticlesBgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticlesBgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
