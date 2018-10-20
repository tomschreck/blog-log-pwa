import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';

export class BlogCreateModel
{
  Title: string;
  BlogType: BlogTypeEnum = BlogTypeEnum.Travel;
  ShortDescription: string;
  LongDescription: string;
  TagList: string[] = [];
  ImageList: File[] = [];
  Latitude: number;
  Longitude: number;
}
