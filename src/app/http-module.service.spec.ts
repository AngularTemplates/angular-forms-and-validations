import { TestBed } from '@angular/core/testing';

import { HttpModuleService } from './http-module.service';

describe('HttpModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpModuleService = TestBed.get(HttpModuleService);
    expect(service).toBeTruthy();
  });
});
