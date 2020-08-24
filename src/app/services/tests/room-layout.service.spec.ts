import { TestBed } from '@angular/core/testing';

import { RoomLayoutService } from '../room-layout.service';

describe('RoomLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomLayoutService = TestBed.get(RoomLayoutService);
    expect(service).toBeTruthy();
  });
});
