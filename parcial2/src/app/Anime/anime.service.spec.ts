/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimeService } from './anime.service';
import { HttpClient } from '@angular/common/http';

describe('Service: Anime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimeService],
      imports: [HttpClient],
    });
  });

  it('should ...', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));
});
