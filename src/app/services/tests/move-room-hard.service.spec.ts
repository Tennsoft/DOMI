import { TestBed } from '@angular/core/testing';

import { MoveRoomHardService } from '../difficulty/move-room-hard.service';

describe('MoveRoomHardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveRoomHardService = TestBed.get(MoveRoomHardService);
    expect(service).toBeTruthy();
  });
});
