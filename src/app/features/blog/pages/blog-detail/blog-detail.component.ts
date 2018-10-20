import { Component, OnInit } from '@angular/core';

import { BlogService } from '@app/features/blog/services/blog-service/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: [ './blog-detail.component.scss' ]
})
export class BlogDetailComponent implements OnInit
{

  constructor
  (
    public blogService: BlogService
  )
  {
  }

  ngOnInit()
  {
  }

}
