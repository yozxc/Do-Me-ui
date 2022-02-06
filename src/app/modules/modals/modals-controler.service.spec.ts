import { TestBed } from '@angular/core/testing';

import { ModalsControlerService } from './modals-controler.service';

describe('ModalsControlerService', () => {
  let service: ModalsControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalsControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
