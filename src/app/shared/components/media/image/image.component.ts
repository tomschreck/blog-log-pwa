import { Component, OnInit, Input } from '@angular/core';
import { MediaAssetModel } from '@app/models/blog/media-asset.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [ './image.component.scss' ]
})
export class ImageComponent implements OnInit
{
  backgroundImageUrl: string;

  @Input() mediaAssetModel: MediaAssetModel;

  constructor() { }

  ngOnInit()
  {
    this.backgroundImageUrl = `url(${this.mediaAssetModel.thumb_url})`;
  }

}
