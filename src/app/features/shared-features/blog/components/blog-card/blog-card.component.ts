import { Component, OnInit, Input } from '@angular/core';

import { BlogModel } from '@app/models/blog/blog.model';

import { NavigationService } from '@app/core/services/navigation/navigation.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: [ './blog-card.component.scss' ]
})
export class BlogCardComponent implements OnInit
{
  @Input() blogModel: BlogModel;

  constructor
  (
    private navigationService: NavigationService
  )
  {
  }

  ngOnInit()
  {
  }

  GoToBlogDetailPage()
  {
    this.navigationService.GoToBlogDetailPage(this.blogModel._id);
  }
}
