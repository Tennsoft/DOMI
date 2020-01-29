import { TestBed } from '@angular/core/testing';

import { PlayerArrayService } from './player-array.service';

describe('PlayerArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerArrayService = TestBed.get(PlayerArrayService);
    expect(service).toBeTruthy();
  });
});
