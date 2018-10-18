import { Component, OnInit } from '@angular/core';

import { BlogCreateModel } from '@app/models/blog/blog-create.model';
import { BlogService } from '@app/features/blog/services/blog-service/blog.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: [ './blog-create.component.scss' ]
})
export class BlogCreateComponent implements OnInit
{

  constructor
  (
    private logService: BlogService,
    private navigationService: NavigationService
  )
  {
  }

  ngOnInit()
  {
  }

  onFormSubmit(blogCreateModel: BlogCreateModel)
  {
    // console.log('DAS LOG:', blogCreateModel);

    this.logService.CreateBlog(blogCreateModel)
        .subscribe
        (
          () =>
          {
            this.navigationService.GoToHomePage();
          }
        );
  }

  onFormCancel()
  {
    this.navigationService.GoToHomePage();
  }
}
