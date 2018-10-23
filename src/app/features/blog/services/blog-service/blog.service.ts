import { Injectable } from '@angular/core';
import { map, catchError, mergeAll, mergeMap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject, of, forkJoin } from 'rxjs';

import { BlogCreateModel } from '@app/models/blog/blog-create.model';
import { BlogModel } from '@app/models/blog/blog.model';

import { HttpService } from '@app/core/services/http/http.service';
import { UrlHelperService } from '@app/core/services/helpers/url-helper.service';
import { ConnectionService } from '@app/core/services/connection-service/connection.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { NavigationService } from '@app/core/services/navigation/navigation.service';


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
    private connectionService: ConnectionService,
    private localStorage: LocalStorage,
    private httpService: HttpService,
    private navigationService: NavigationService
  )
  {
    /*
    LISTEN FOR WHEN CONNECTION IS ESTABLISHED TO UPLOAD ANY OFFLINE BLOG ENTRY ITEMS FROM CACHE
    */
    this.connectionService.ConnectionMonitorStream
    .subscribe
    (
      (isConnected) =>
      {
        if (isConnected)
        {
          this.checkForCachedBlogEntries()
            .pipe
            (
              mergeMap(data => this.uploadOfflineBlogEntryItems(data)),
              mergeMap(() => this.PendingBlogList())
            )
            .subscribe();
        }
      }
    );
  }

  CreateBlog(blogCreateModel: BlogCreateModel): Observable<BlogCreateModel>
  {
    const url = UrlHelperService.GetPostBlogUrl();

    const data =
    {
      title: blogCreateModel.title,
      blogTypeId: blogCreateModel.blogTypeId,
      shortDescription: blogCreateModel.shortDescription,
      longDescription: blogCreateModel.longDescription,
      tagList: blogCreateModel.tagList,
      latitude: blogCreateModel.latitude,
      longitude: blogCreateModel.longitude
    };

    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(data));

    if (blogCreateModel.imageList)
    {
      blogCreateModel.imageList.map((item: File) =>
      {
        formData.append('blogFile', item, item.name);
      });
    }

    return this.httpService.Post(url, formData)
      .pipe
      (
        map(() =>
        {
          return blogCreateModel;
        }),
        catchError( (err) => throwError(err) )
      );
  }

  CacheOfflineBlog(blogCreateModel: BlogCreateModel): Observable<BlogCreateModel>
  {
    return Observable.create(observer =>
    {
      blogCreateModel.arrayBuffer = [];

      // loop over each image in BlogCreateModel and convert each image to arrayBuffer
      of(blogCreateModel.imageList)
        .pipe
        (
          mergeAll(),
          mergeMap((iterativeFile: File) => this.blobToArrayBuffer(iterativeFile)),
          map((buffer) => { blogCreateModel.arrayBuffer.push(buffer); })
        )
        .subscribe
        (
          () => {},
          error => {},
          () =>
          {
            // NOW READY TO SAVE BlogCreateModel TO CACHE...
            // console.log('0. READY TO CACHE...', blogCreateModel);

            // WIPE OUT IMAGE LIST AS IT HAS ALREADY BEEN PROCESSED INTO arrayBuffer
            blogCreateModel.imageList = undefined;

            /*
            CHECK IF THERE ARE ANY EXISTING CACHED BLOG ITEMS
            IF SO, THEN APPEND PASSED blogCreateModel ONTO CACHED LIST
            */
            this.localStorage.getItem('blogList')
                .subscribe
                (
                  (cachedData) =>
                  {
                    const cacheBlogList = [];

                    // IF THERE ARE ANY EXISTING BLOG ITEMS CACHED, THEN MAKE SURE WE DON'T LOOSE THEM...
                    if (cachedData)
                    {
                      cachedData.map((item) => cacheBlogList.push(item));
                    }

                    // console.log('1. DAS DATA FROM LOCALHOST', cacheBlogList);

                    cacheBlogList.push(blogCreateModel);

                    this.localStorage.setItem('blogList', cacheBlogList)
                        .subscribe
                        (
                          (wtf) =>
                          {
                            // console.log('2. DAS IT YO FINALLY', wtf, cacheBlogList);

                            observer.next(blogCreateModel);
                            observer.complete();
                          },
                          (err) =>
                          {
                            observer.error(err);
                            observer.complete();
                          }
                        );
                  }
                );
          }
        );
    });
  }

  PendingBlogList(): Observable<BlogModel[]>
  {
    const url = UrlHelperService.GetPendingBlogListUrl();

    return Observable.create(observer =>
    {
      forkJoin
        (
          this.httpService.Get(url),
          this.checkForCachedBlogEntries(),
          (first, second) =>
          {
            return {
              pendingBlogList: BlogModel.ToList(first),
              offlineBlogList: second
            };
          }
        )
        .subscribe
        (
          (results) =>
          {
            if (results.offlineBlogList)
            {
              results.offlineBlogList.map((item) =>
              {
                const offlineBlogModel: BlogModel = new BlogModel(item);
                offlineBlogModel.isOfflineCachedItem = true;
                results.pendingBlogList.push(offlineBlogModel);
              });
            }

            console.log('FORKED RESULTS:', results);

            this.pendingBlogListSubject.next(results.pendingBlogList);

            observer.next(results.pendingBlogList);
            observer.complete();
          }
        );
    });
  }

  GetBlogDetail(id: string): Observable<BlogModel>
  {
    return Observable.create(observer =>
    {
      const cachedBlogModel = this.blogDetailSubject.value;

      if (cachedBlogModel && cachedBlogModel._id === id)
      {
        observer.next(cachedBlogModel);
        observer.complete();
      }
      else
      {
        const url = UrlHelperService.GetBlogDetailUrl(id);

        this.httpService.Get(url)
          .pipe
          (
            map((rawData: {}) =>
            {
              const model: BlogModel = new BlogModel(rawData);
              this.blogDetailSubject.next(model);

              observer.next(model);
              observer.complete();
            }),
            catchError( (err) => throwError(err) )
          );
      }
    });
  }

  SetBlogDetail(blogModel: BlogModel)
  {
    this.blogDetailSubject.next(blogModel);
  }



  private checkForCachedBlogEntries(): Observable<any>
  {
    return this.localStorage.getItem('blogList');
  }

  private uploadOfflineBlogEntryItems(offlineBlogItems: {}[]): Observable<any>
  {
    // console.log('OFFLINE BLOG ITEMS TO BE PROCESSED: ', offlineBlogItems);

    return Observable.create(observer =>
    {
      of(offlineBlogItems)
        .pipe
        (
          mergeAll(),
          map((cachedBlogItem) =>
          {
            const blogCreateModel = new BlogCreateModel(cachedBlogItem);
            blogCreateModel.imageList = [];

            blogCreateModel.arrayBuffer.map((bufferItem: {}) =>
            {
              const reconstitutedBlob = this.arrayBufferToBlob(bufferItem);
              blogCreateModel.imageList.push(reconstitutedBlob);
            });

            // console.log('CACHED BLOG ITEM TO SAVE', blogCreateModel);

            this.CreateBlog(blogCreateModel).subscribe();
          })
        )
        .subscribe
        (
          () => {},
          error => {},
          () =>
          {
            // console.log('ALL OFFLINE ITEMS PROCESSED: ');
            this.localStorage.removeItem('blogList')
                .subscribe
                (
                  () => {},
                  () => {},
                  () =>
                  {
                    this.pendingBlogListSubject.next(undefined);

                    observer.next();
                    observer.complete();
                  }
                );
          }
        );
    });
  }

  private blobToArrayBuffer(file: File)
  {
    return Observable.create(observer =>
    {
      const reader = new FileReader();

      // FILE CONTENTS AFTER READING FILE
      reader.addEventListener('loadend', (e) =>
      {
        const results =
        {
          buffer: reader.result,
          fileName: file.name,
          contentType: file.type,
          lastModified: file.lastModified
        };

        observer.next(results);
        observer.complete();
      });

      // ANY ERRORS...
      reader.addEventListener('error', (err) =>
      {
        observer.error(err);
        observer.complete();
      });

      reader.readAsArrayBuffer(file);
    });
  }

  private arrayBufferToBlob(bufferItem: {})
  {
    const byteArrays = bufferItem['buffer'];
    const fileName = bufferItem['fileName'];
    const contentType = bufferItem['contentType'];
    const lastModified = bufferItem['lastModified'];

    return new File([byteArrays], fileName, {type: contentType, lastModified: lastModified});
  }
}
