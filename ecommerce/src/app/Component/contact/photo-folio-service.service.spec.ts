import { TestBed } from '@angular/core/testing';

import { PhotoFolioServiceService } from './photo-folio-service.service';

describe('PhotoFolioServiceService', () => {
  let service: PhotoFolioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoFolioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
