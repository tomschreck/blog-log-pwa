import { Component, OnInit } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { BlogCreateModel } from '@app/models/blog/blog-create.model';
import { BlogService } from '@app/features/blog/services/blog-service/blog.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';
import { MessageService } from '@app/core/services/messages/message.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: [ './blog-create.component.scss' ]
})
export class BlogCreateComponent implements OnInit
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
    this.blogService.CreateBlog(blogCreateModel)
        .pipe
        (
          mergeMap(() => this.messageService.CreateSuccessMessage('Success', `Successfully created blog entry.`)),
          map(() =>
          {
            this.navigationService.GoToHomePage();
          }),
          catchError( (err) => throwError(err) )
        ).subscribe();
  }

  onFormCancel()
  {
    this.navigationService.GoToHomePage();
  }
}
