/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoNaGracaService } from './so-na-graca.service';

describe('SoNaGracaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoNaGracaService]
    });
  });

  it('should ...', inject([SoNaGracaService], (service: SoNaGracaService) => {
    expect(service).toBeTruthy();
  }));
});
