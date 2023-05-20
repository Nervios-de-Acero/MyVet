import { TestBed } from '@angular/core/testing';

import { FiltroService } from './filtro.service';

describe('FiltroService', () => {
  let service: FiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
