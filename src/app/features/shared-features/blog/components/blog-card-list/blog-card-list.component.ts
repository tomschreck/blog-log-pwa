import { Component, OnInit, Input } from '@angular/core';

import { BlogModel } from '@app/models/blog/blog.model';

@Component({
  selector: 'app-blog-card-list',
  templateUrl: './blog-card-list.component.html',
  styleUrls: [ './blog-card-list.component.scss' ]
})
export class BlogCardListComponent implements OnInit
{
  @Input() blogList: BlogModel[];

  constructor() { }

  ngOnInit()
  {
  }
}
