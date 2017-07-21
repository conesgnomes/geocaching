import { TestBed, inject } from '@angular/core/testing';

import { SaveCacheService } from './save-cache.service';

describe('SaveCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveCacheService]
    });
  });

  it('should be created', inject([SaveCacheService], (service: SaveCacheService) => {
    expect(service).toBeTruthy();
  }));
});
