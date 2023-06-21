import { TestBed } from '@angular/core/testing';

import { ReparateurService } from './reparateur.service';

describe('ReparateurService', () => {
  let service: ReparateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReparateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
