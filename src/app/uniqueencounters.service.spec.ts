import { TestBed } from '@angular/core/testing';

import { UniqueEncountersService } from './uniqueencounters.service';

describe('UniqueencountersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueEncountersService = TestBed.get(UniqueEncountersService);
    expect(service).toBeTruthy();
  });
});
