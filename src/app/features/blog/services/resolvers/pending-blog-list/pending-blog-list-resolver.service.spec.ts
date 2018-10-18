import { TestBed } from '@angular/core/testing';

import { PendingBlogListResolverService } from './pending-blog-list-resolver.service';

describe('PendingBlogListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingBlogListResolverService = TestBed.get(PendingBlogListResolverService);
    expect(service).toBeTruthy();
  });
});
