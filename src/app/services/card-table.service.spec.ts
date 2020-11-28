import { TestBed } from '@angular/core/testing';

import { CardTableService } from './card-table.service';

describe('CardTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardTableService = TestBed.get(CardTableService);
    expect(service).toBeTruthy();
  });
});
