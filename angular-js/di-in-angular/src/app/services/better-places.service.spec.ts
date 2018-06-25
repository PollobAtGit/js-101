import { TestBed, inject } from '@angular/core/testing';

import { BetterPlacesService } from './better-places.service';

describe('BetterPlacesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetterPlacesService]
    });
  });

  it('should be created', inject([BetterPlacesService], (service: BetterPlacesService) => {
    expect(service).toBeTruthy();
  }));
});
