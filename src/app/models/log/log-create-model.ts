import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';

export class LogCreateModel
{
  WorkingTitle: string;
  BlogType: BlogTypeEnum = BlogTypeEnum.Travel;
  ShortDescription: string;
  LongDescription: string;
  TagList: string[];
  ImageList: string[];
}
