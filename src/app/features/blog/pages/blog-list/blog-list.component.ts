import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { BlogService } from '@app/features/blog/services/blog-service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: [ './blog-list.component.scss' ]
})
export class BlogListComponent implements OnInit
{
  title: string;

  constructor
  (
    public blogService: BlogService,
    private swUpdate: SwUpdate
  )
  {
  }

  ngOnInit()
  {
    this.title = 'Pending Blog Items';

    this.swUpdate.available.subscribe((event) =>
    {
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    });
  }
}
