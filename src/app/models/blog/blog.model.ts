import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { FactoryModel } from '@app/models/factory.model';
import { MediaAssetModel } from '@app/models/blog/media-asset.model';

export class BlogModel
{
  _id: string;
  hasMediaAssetsBeenProcessed: boolean;
  hasBlogEntryBeenPublished: boolean;
  title: string;
  blogTypeId: number;
  blogTypeName: string;
  shortDescription: string;
  longDescription: string;
  latitude: number;
  longitude: number;
  tagList: string[] = [];
  mediaAssetsList: MediaAssetModel[] = [];
  mediaAssetsProcessedTimestamp: Date;
  createdAt: Date;
  updatedAt: Date;

  defaultMediaAssetModel: MediaAssetModel;

  constructor(rawJson?: any)
  {
    if (rawJson)
    {
      FactoryModel.CreateIt<BlogModel>(this, rawJson);

      this.blogTypeName = BlogTypeEnum[this.blogTypeId];
      this.defaultMediaAssetModel = (this.mediaAssetsList && this.mediaAssetsList.length > 0) ? this.mediaAssetsList[0] : undefined;
    }
  }

  public static ToList(rawJsonList): BlogModel[]
  {
    const list: BlogModel[] = [];

    if (rawJsonList)
    {
      rawJsonList.map((item: any) =>
      {
        const model = new BlogModel(item);
        list.push(model);
      });
    }

    return list;
  }
}
