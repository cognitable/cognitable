import { TestBed } from '@angular/core/testing';

import { CognitableService } from './cognitable.service';

describe('CognitableService', () => {
  let service: CognitableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CognitableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
