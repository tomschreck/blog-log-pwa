import { Component, OnInit } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { BlogCreateModel } from '@app/models/blog/blog-create.model';
import { BlogService } from '@app/features/blog/services/blog-service/blog.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';
import { MessageService } from '@app/core/services/messages/message.service';

@Component({
  selector: 'app-blog-create-offline',
  templateUrl: './blog-create-offline.component.html',
  styleUrls: [ './blog-create-offline.component.scss' ]
})
export class BlogCreateOfflineComponent implements OnInit
{
  constructor
    (
    private blogService: BlogService,
    private messageService: MessageService,
    private navigationService: NavigationService
    )
  {
  }

  ngOnInit()
  {
  }

  onFormSubmit(blogCreateModel: BlogCreateModel)
  {
    this.blogService.CacheOfflineBlog(blogCreateModel)
      .pipe
      (
        mergeMap(() => this.messageService.CreateSuccessMessage('Success', `Successfully cached blog entry offline.  Entry will be uploaded when next connected online.`)),
        map(
          () =>
          {
            this.navigationService.GoToHomePage();
          }
        ),
        catchError((err) =>
        {
          return throwError(err);
        })
      ).subscribe();
  }

  onFormCancel()
  {
    this.navigationService.GoToHomePage();
  }
}
