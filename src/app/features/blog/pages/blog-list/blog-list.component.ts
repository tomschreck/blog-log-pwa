import { Component, OnInit } from '@angular/core';
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
    public blogService: BlogService
  )
  {
  }

  ngOnInit()
  {
    this.title = 'Pending Blog Items';
  }

}
