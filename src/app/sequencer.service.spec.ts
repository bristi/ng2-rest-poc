import { TestBed, inject } from '@angular/core/testing';

import { SequencerService } from './sequencer.service';

describe('SequencerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SequencerService]
    });
  });

  it('should be created', inject([SequencerService], (service: SequencerService) => {
    expect(service).toBeTruthy();
  }));
});
