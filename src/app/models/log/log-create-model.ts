import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';

export class LogCreateModel
{
  Title: string;
  BlogType: BlogTypeEnum = BlogTypeEnum.Travel;
  ShortDescription: string;
  LongDescription: string;
  TagList: string[] = [];
  ImageList: File[] = [];
}
