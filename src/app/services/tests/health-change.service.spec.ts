import { TestBed } from '@angular/core/testing';

import { HealthChangeService } from '../health-change.service';

describe('HealthChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthChangeService = TestBed.get(HealthChangeService);
    expect(service).toBeTruthy();
  });
});
