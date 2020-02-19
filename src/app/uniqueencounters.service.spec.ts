import { TestBed } from '@angular/core/testing';

import { UniqueencountersService } from './uniqueencounters.service';

describe('UniqueencountersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueencountersService = TestBed.get(UniqueencountersService);
    expect(service).toBeTruthy();
  });
});
