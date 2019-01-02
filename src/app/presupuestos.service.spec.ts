import { TestBed } from '@angular/core/testing';

import { PresupuestosService } from './presupuestos.service';

describe('PresupuestosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresupuestosService = TestBed.get(PresupuestosService);
    expect(service).toBeTruthy();
  });
});
