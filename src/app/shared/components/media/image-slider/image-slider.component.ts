import { Component, OnInit, Input } from '@angular/core';

import { BlogModel } from '@app/models/blog/blog.model';
import { MediaAssetModel } from '@app/models/blog/media-asset.model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: [ './image-slider.component.scss' ]
})
export class ImageSliderComponent implements OnInit
{
  imageSources: string[] = [];

  @Input() blogModel: BlogModel;

  constructor() { }

  ngOnInit()
  {
    this.blogModel.mediaAssetsList.map((item: MediaAssetModel) => this.imageSources.push(item.thumb_url));
  }

}
