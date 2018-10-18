import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { BlogModel } from '@app/models/blog/blog.model';
import { BlogService } from '@app/features/blog/services/blog-service/blog.service';

@Injectable({
  providedIn: 'root'
})
export class PendingBlogListResolverService implements Resolve<Observable<BlogModel[]>>
{
  constructor
  (
    private blogService: BlogService
  )
  {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<BlogModel[]>
  {
    return this.blogService.PendingBlogList();
  }
}
