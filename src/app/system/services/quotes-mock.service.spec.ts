import { TestBed } from '@angular/core/testing';

import { QuotesMockService } from './quotes-mock.service';

describe('QuotesMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotesMockService = TestBed.get(QuotesMockService);
    expect(service).toBeTruthy();
  });
});
