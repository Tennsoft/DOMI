import { TestBed } from '@angular/core/testing';

import { MoveRoomService } from './move-room.service';

describe('MoveRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveRoomService = TestBed.get(MoveRoomService);
    expect(service).toBeTruthy();
  });
});
