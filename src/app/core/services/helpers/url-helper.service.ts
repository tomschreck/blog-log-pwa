import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService
{
  // BLOG
  public static GetPostBlogUrl(): string
  {
    return `${environment.API.URL}`;
  }

  // PENDING BLOG LIST
  public static GetPendingBlogListUrl(): string
  {
    return `${environment.API.URL}/pending-blog-list`;
  }

  // PENDING BLOG LIST
  public static GetBlogDetailUrl(id: string): string
  {
    return `${environment.API.URL}/${id}`;
  }
}
