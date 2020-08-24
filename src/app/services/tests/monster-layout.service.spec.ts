import { TestBed } from '@angular/core/testing';

import { MonsterLayoutService } from '../monster-layout.service';

describe('MonsterLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterLayoutService = TestBed.get(MonsterLayoutService);
    expect(service).toBeTruthy();
  });
});
