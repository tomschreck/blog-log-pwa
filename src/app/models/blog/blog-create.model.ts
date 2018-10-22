import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { FactoryModel } from '@app/models/factory.model';

export class BlogCreateModel
{
  title: string;
  blogTypeId: BlogTypeEnum = BlogTypeEnum.Travel;
  shortDescription: string;
  longDescription: string;
  tagList: string[] = [];
  imageList: File[] = [];
  arrayBuffer: {}[] = [];
  latitude: number;
  longitude: number;

  constructor(rawJson?: any)
  {
    if (rawJson)
    {
      FactoryModel.CreateIt<BlogCreateModel>(this, rawJson);
    }
  }
}
