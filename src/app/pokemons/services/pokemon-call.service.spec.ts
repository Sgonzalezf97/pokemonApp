import { TestBed } from '@angular/core/testing';

import { PokemonCallService } from './pokemon-call.service';

describe('PokemonCallService', () => {
  let service: PokemonCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
