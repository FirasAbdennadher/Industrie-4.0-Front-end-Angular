import { TestBed } from '@angular/core/testing';

import { GallerysService } from './gallerys.service';

describe('GallerysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GallerysService = TestBed.get(GallerysService);
    expect(service).toBeTruthy();
  });
});
