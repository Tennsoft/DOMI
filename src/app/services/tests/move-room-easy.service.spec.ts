import { TestBed } from '@angular/core/testing';

import { MoveRoomEasyService } from '../difficulty/move-room-easy.service';

describe('MoveRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveRoomEasyService = TestBed.get(MoveRoomEasyService);
    expect(service).toBeTruthy();
  });
});
