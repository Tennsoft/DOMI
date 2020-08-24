import { TestBed } from '@angular/core/testing';

import { MoveRoomMediumService } from '../difficulty/move-room-medium.service';

describe('4x4MoveRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveRoomMediumService = TestBed.get(MoveRoomMediumService);
    expect(service).toBeTruthy();
  });
});
