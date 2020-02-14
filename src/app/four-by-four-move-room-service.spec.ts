import { TestBed } from '@angular/core/testing';

import { FourByFourMoveRoomService } from './four-by-four-move-room.service';

describe('4x4MoveRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FourByFourMoveRoomService = TestBed.get(FourByFourMoveRoomService);
    expect(service).toBeTruthy();
  });
});
