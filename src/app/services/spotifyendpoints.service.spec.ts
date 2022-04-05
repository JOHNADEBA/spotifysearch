import { TestBed } from '@angular/core/testing';

import { SpotifyendpointsService } from './spotifyendpoints.service';

describe('SpotifyendpointsService', () => {
  let service: SpotifyendpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyendpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
