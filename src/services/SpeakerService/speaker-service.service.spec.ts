import { TestBed } from '@angular/core/testing';

import { SpeakerServiceService } from './speaker-service.service';

describe('SpeakerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeakerServiceService = TestBed.get(SpeakerServiceService);
    expect(service).toBeTruthy();
  });
});
