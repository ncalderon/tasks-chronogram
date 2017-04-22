import { TestBed, inject } from '@angular/core/testing';

import { BaseServiceImplService } from './base-service-impl.service';

describe('BaseServiceImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseServiceImplService]
    });
  });

  it('should ...', inject([BaseServiceImplService], (service: BaseServiceImplService) => {
    expect(service).toBeTruthy();
  }));
});
