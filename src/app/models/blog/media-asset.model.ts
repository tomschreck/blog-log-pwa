import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { FactoryModel } from '@app/models/factory.model';

export class MediaAssetModel
{
  _id: string;
  public_id: string;
  url: string;
  thumb_url: string;
  small_url: string;
  medium_url: string;
  large_url: string;

  constructor(rawJson?: any)
  {
    if (rawJson)
    {
      FactoryModel.CreateIt<MediaAssetModel>(this, rawJson);
    }
  }

  public static ToList(rawJsonList): MediaAssetModel[]
  {
    const list: MediaAssetModel[] = [];

    if (rawJsonList)
    {
      rawJsonList.map((item: any) =>
      {
        const model = new MediaAssetModel(item);
        list.push(model);
      });
    }

    return list;
  }
}
