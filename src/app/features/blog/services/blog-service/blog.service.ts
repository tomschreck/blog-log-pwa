import { Injectable } from '@angular/core';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { BlogCreateModel } from '@app/models/blog/blog-create.model';
import { BlogModel } from '@app/models/blog/blog.model';

import { HttpService } from '@app/core/services/http/http.service';
import { UrlHelperService } from '@app/core/services/helpers/url-helper.service';
import { MessageService } from '@app/core/services/messages/message.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService
{
  private pendingBlogListSubject = new BehaviorSubject<BlogModel[]>(undefined);
  private blogDetailSubject = new BehaviorSubject<BlogModel>(undefined);

  PendingBlogListStream = this.pendingBlogListSubject.asObservable();
  BlogDetailStream = this.blogDetailSubject.asObservable();

  constructor
  (
    private httpService: HttpService,
    private messageService: MessageService
  )
  {
  }

  CreateBlog(blogCreateModel: BlogCreateModel): Observable<BlogCreateModel>
  {
    const url = UrlHelperService.GetPostBlogUrl();

    const data =
    {
      title: blogCreateModel.Title,
      blogTypeId: blogCreateModel.BlogType,
      shortDescription: blogCreateModel.ShortDescription,
      longDescription: blogCreateModel.LongDescription,
      tagList: blogCreateModel.TagList,
      latitude: blogCreateModel.Latitude,
      longitude: blogCreateModel.Longitude
    };

    const formData: FormData = new FormData();

    blogCreateModel.ImageList.map((item: File) =>
    {
      formData.append('blogFile', item, item.name);
    });

    formData.append('data', JSON.stringify(data));

    return this.httpService.Post(url, formData)
      .pipe
      (
        mergeMap(() => this.messageService.CreateSuccessMessage('Success', `Successfully created blog entry.`)),
        map(() =>
        {
          return blogCreateModel;
        }),
        catchError( (err) => throwError(err) )
      );
  }

  PendingBlogList(): Observable<BlogModel[]>
  {
    const url = UrlHelperService.GetPendingBlogListUrl();

    return this.httpService.Get(url)
      .pipe
      (
        map((rawData: {}) =>
        {
          const list: BlogModel[] = BlogModel.ToList(rawData);
          this.pendingBlogListSubject.next(list);

          // console.log('PENDING BLOG LIST:', list);

          return list;
        }),
        catchError( (err) => throwError(err) )
      );
  }

  GetBlogDetail(id: string): Observable<BlogModel>
  {
    const url = UrlHelperService.GetBlogDetailUrl(id);

    return this.httpService.Get(url)
      .pipe
      (
        map((rawData: {}) =>
        {
          const model: BlogModel = new BlogModel(rawData);
          this.blogDetailSubject.next(model);

          console.log('BLOG DETAIL:', model);

          return model;
        }),
        catchError( (err) => throwError(err) )
      );
  }
}
