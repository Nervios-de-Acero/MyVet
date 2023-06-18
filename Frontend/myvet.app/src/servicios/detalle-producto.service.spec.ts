import { TestBed } from '@angular/core/testing';

import { DetalleProductoService } from './detalle-producto.service';

describe('DetalleProductoService', () => {
  let service: DetalleProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
