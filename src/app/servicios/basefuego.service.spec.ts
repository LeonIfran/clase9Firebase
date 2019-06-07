import { TestBed } from '@angular/core/testing';

import { BasefuegoService } from './basefuego.service';

describe('BasefuegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasefuegoService = TestBed.get(BasefuegoService);
    expect(service).toBeTruthy();
  });
});
