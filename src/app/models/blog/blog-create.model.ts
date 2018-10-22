import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { FactoryModel } from '@app/models/factory.model';

export class BlogCreateModel
{
  Title: string;
  BlogType: BlogTypeEnum = BlogTypeEnum.Travel;
  ShortDescription: string;
  LongDescription: string;
  TagList: string[] = [];
  ImageList: File[] = [];
  ArrayBuffer: {}[] = [];
  Latitude: number;
  Longitude: number;

  constructor(rawJson?: any)
  {
    if (rawJson)
    {
      FactoryModel.CreateIt<BlogCreateModel>(this, rawJson);
    }
  }
}
