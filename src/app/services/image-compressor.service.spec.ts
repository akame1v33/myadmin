import { TestBed, inject } from '@angular/core/testing';

import { ImageCompressorService } from './image-compressor.service';

describe('ImageCompressorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageCompressorService]
    });
  });

  it('should be created', inject([ImageCompressorService], (service: ImageCompressorService) => {
    expect(service).toBeTruthy();
  }));
});
