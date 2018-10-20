import { TestBed } from '@angular/core/testing';

import { BlogDetailResolverService } from './blog-detail-resolver.service';

describe('BlogDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogDetailResolverService = TestBed.get(BlogDetailResolverService);
    expect(service).toBeTruthy();
  });
});
